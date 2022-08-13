package com.easydev.gsmguide.dtos;


import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ResetPasswordRequest {
    private String password;
    private String code;
}
