package com.easydev.gsmguide.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenDto {
    private String token_type;
    private String access_token;
    private int expires_in;
}
