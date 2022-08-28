package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import com.easydev.gsmguide.dtos.security.CodeDto;
import com.easydev.gsmguide.dtos.security.UsernameDto;
import com.easydev.gsmguide.services.RecoverPasswordService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;


@RestController
@CrossOrigin
@RequestMapping("api/")
public class RecoverPasswordController {

    private final RecoverPasswordService recoverPasswordService;

    RecoverPasswordController(RecoverPasswordService recoverPasswordService) {
        this.recoverPasswordService = recoverPasswordService ;
    }

    @PostMapping("forget-password")
    public ResponseEntity<?> forgetPassword(@RequestBody UsernameDto usernameDto) throws IOException {
        return recoverPasswordService.sendRecoverPasswordSms(usernameDto.getUsername());
    }

    @PostMapping("verify-reset-password-code")
    public ResponseEntity<?> verifyResetPasswordCode(@RequestBody CodeDto codeDto) {
        return recoverPasswordService.verifyResetPasswordCode(codeDto.getCode());
    }

    @PostMapping("reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest resetPasswordRequest) {
        return recoverPasswordService.changePassword(resetPasswordRequest);
    }
}
