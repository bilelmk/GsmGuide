package com.easydev.gsmguide.services.implementation;


import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import com.easydev.gsmguide.dtos.sms.SendSmsDto;
import com.easydev.gsmguide.models.AppUser;
import com.easydev.gsmguide.models.RecoverPassword;
import com.easydev.gsmguide.repositories.RecoverPasswordRepository;
import com.easydev.gsmguide.repositories.UserRepository;
import com.easydev.gsmguide.services.RecoverPasswordService;
import com.easydev.gsmguide.services.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;


import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;


@Service
public class RecoverPasswordServiceImpl implements RecoverPasswordService {

    @Autowired
    private UserRepository accountRepository;
    @Autowired
    private RecoverPasswordRepository recoverPasswordRepository;
    @Autowired
    private SmsService smsService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public boolean sendRecoverPasswordSms(String username) throws IOException {
        AppUser account = accountRepository.findByUsernameIgnoreCase(username).orElse(null);
        if (account == null) {
            return false;
        }

        String verificationCode = generatingRandomAlphanumericString();

        SendSmsDto sendSmsDto = new SendSmsDto();
        sendSmsDto.setNumber(account.getPhone());
        sendSmsDto.setMessage(verificationCode);

        smsService.sendSms(sendSmsDto);

        RecoverPassword recoverPassword = new RecoverPassword();
        recoverPassword.setAccount(account);
        recoverPassword.setCode(verificationCode);
        recoverPassword.setCreatedAt(LocalDateTime.now());
        recoverPassword.setExpiresAt(LocalDateTime.now().plusHours(24));
        recoverPasswordRepository.save(recoverPassword);

        return true;
    }


    @Override
    @Transactional
    public boolean changePassword(ResetPasswordRequest request) {

        RecoverPassword recoverPassword = recoverPasswordRepository.findByCodeAndUsed(request.getCode(), false).orElse(null);
        if (recoverPassword == null) {
            return false;
        }
        AppUser account = recoverPassword.getAccount();
        recoverPassword.setUsed(true);
        account.setPassword(passwordEncoder.encode(request.getPassword()));
        recoverPasswordRepository.save(recoverPassword);
        accountRepository.save(account);
        return true;
    }

    @Override
    public boolean verifyResetPasswordCode(String code) {
        return recoverPasswordRepository.existsByCodeAndExpiresAtGreaterThanAndUsed(code, LocalDateTime.now(), false);
    }


    public String generatingRandomAlphanumericString() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 4;
        Random random = new Random();

        return   random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
    }
}
