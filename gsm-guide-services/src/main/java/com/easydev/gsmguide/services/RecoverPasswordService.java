package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

public interface RecoverPasswordService {
    ResponseEntity<?> sendRecoverPasswordSms(String username) throws IOException;
    @Transactional
    ResponseEntity<?> changePassword(ResetPasswordRequest request);
    ResponseEntity<?> verifyResetPasswordCode(String code);
}
