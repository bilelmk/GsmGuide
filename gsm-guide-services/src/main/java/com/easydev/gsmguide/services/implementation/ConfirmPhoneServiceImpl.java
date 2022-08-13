package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.AppUser;
import com.easydev.gsmguide.repositories.ConfirmPhoneRepository;
import com.easydev.gsmguide.repositories.UserRepository;
import com.easydev.gsmguide.services.ConfirmPhoneService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ConfirmPhoneServiceImpl implements ConfirmPhoneService {

    private final ConfirmPhoneRepository confirmPhoneRepository ;
    private final UserRepository userRepository ;

    ConfirmPhoneServiceImpl(ConfirmPhoneRepository confirmPhoneRepository, UserRepository userRepository){
        this.confirmPhoneRepository = confirmPhoneRepository ;
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<?> verifyConfirmCode(String code) {
        boolean isCodeExist = confirmPhoneRepository.existsByCodeAndExpiresAtGreaterThanAndUsed(code, LocalDateTime.now(), false);
        if(!isCodeExist) {
            return new ResponseEntity<>("code incorrect", HttpStatus.NOT_FOUND);
        }
        else {
            AppUser client = confirmPhoneRepository.findByCode(code).getAccount() ;
            client.setConfirmed(true);
            userRepository.save(client) ;
            return new ResponseEntity<>(true, HttpStatus.OK) ;
        }

    }
}
