package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

public interface RecoverPasswordService {
    ResponseEntity<?> sendRecoverPasswordSms(String username) throws IOException;
    @Transactional
    boolean changePassword(ResetPasswordRequest request);
    boolean verifyResetPasswordCode(String code);
}
