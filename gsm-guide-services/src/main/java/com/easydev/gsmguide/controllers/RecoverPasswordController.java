package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import com.easydev.gsmguide.dtos.security.UsernameDto;
import com.easydev.gsmguide.services.RecoverPasswordService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;


@RestController
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

    @GetMapping("verify-reset-password-code/{code}")
    public boolean verifyResetPasswordCode(@PathVariable String code) {
        return recoverPasswordService.verifyResetPasswordCode(code);
    }

    @PostMapping("reset-password")
    public boolean resetPassword(@RequestBody ResetPasswordRequest resetPasswordRequest) {
        return recoverPasswordService.changePassword(resetPasswordRequest);
    }
}
