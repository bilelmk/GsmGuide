package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.ResetPasswordRequest;
import com.easydev.gsmguide.services.RecoverPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;


@RestController
@RequestMapping("api/")
public class RecoverPasswordController {

    @Autowired
    private RecoverPasswordService recoverPasswordService;

    @PostMapping("forget-password")
    public boolean forgetPassword(@RequestBody String username) throws IOException {
        return recoverPasswordService.sendRecoverPasswordSms(username);
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
