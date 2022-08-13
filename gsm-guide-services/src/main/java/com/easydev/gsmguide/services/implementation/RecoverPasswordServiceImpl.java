package com.easydev.gsmguide.services.implementation;


import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import com.easydev.gsmguide.dtos.sms.SendSmsDto;
import com.easydev.gsmguide.models.AppUser;
import com.easydev.gsmguide.models.RecoverPassword;
import com.easydev.gsmguide.repositories.RecoverPasswordRepository;
import com.easydev.gsmguide.repositories.UserRepository;
import com.easydev.gsmguide.services.RecoverPasswordService;
import com.easydev.gsmguide.services.SmsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;


@Service
public class RecoverPasswordServiceImpl implements RecoverPasswordService {

    private final Random random = new Random();
    private final UserRepository accountRepository;
    private final RecoverPasswordRepository recoverPasswordRepository;
    private final SmsService smsService;
    private final PasswordEncoder passwordEncoder;

    RecoverPasswordServiceImpl(  UserRepository accountRepository,
                                 RecoverPasswordRepository recoverPasswordRepository,
                                 SmsService smsService,
                                 PasswordEncoder passwordEncoder){
        this.accountRepository = accountRepository;
        this.recoverPasswordRepository = recoverPasswordRepository;
        this.smsService = smsService;
        this.passwordEncoder = passwordEncoder;
    }



    @Override
    public ResponseEntity<?> sendRecoverPasswordSms(String username) throws IOException {
        AppUser account = accountRepository.findByUsernameIgnoreCase(username).orElse(null);
        if (account == null) {
            return new ResponseEntity<>("client not found", HttpStatus.NOT_FOUND);
        }
        String code = Integer.toString(100000 + random.nextInt(899999) + 1);
        SendSmsDto sendSmsDto = new SendSmsDto();
        sendSmsDto.setNumber(account.getPhone());
        sendSmsDto.setMessage(code);
        smsService.sendSms(sendSmsDto);
        RecoverPassword recoverPassword = new RecoverPassword();
        recoverPassword.setAccount(account);
        recoverPassword.setCode(code);
        recoverPassword.setCreatedAt(LocalDateTime.now());
        recoverPassword.setExpiresAt(LocalDateTime.now().plusHours(24));
        recoverPasswordRepository.save(recoverPassword);
        return new ResponseEntity<>(true, HttpStatus.OK) ;
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
}
