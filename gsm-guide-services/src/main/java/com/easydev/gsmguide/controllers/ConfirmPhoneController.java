package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.security.CodeDto;
import com.easydev.gsmguide.services.ConfirmPhoneService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/")
public class ConfirmPhoneController {

    private final ConfirmPhoneService confirmCodeService;

    ConfirmPhoneController(ConfirmPhoneService confirmCodeService) {
        this.confirmCodeService = confirmCodeService ;
    }

    @PostMapping("verify-confirm-code")
    public ResponseEntity<?> verifyConfirmCode(@RequestBody CodeDto codeDto) {
        return confirmCodeService.verifyConfirmCode(codeDto.getCode());
    }

}
