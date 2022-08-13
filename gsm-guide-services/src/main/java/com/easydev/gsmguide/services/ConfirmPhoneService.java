package com.easydev.gsmguide.services;

import org.springframework.http.ResponseEntity;

public interface ConfirmPhoneService {
    ResponseEntity<?> verifyConfirmCode(String code);
}
