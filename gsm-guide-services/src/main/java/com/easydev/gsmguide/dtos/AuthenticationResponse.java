package com.easydev.gsmguide.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse implements Serializable {
    private String token;
    private Long id ;
    private String role ;
    private int expiresIn ;
}
