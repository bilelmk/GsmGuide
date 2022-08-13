package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

public interface RecoverPasswordService {

    boolean sendRecoverPasswordSms(String username) throws IOException;

    @Transactional
    boolean changePassword(ResetPasswordRequest request);

    boolean verifyResetPasswordCode(String code);
}
