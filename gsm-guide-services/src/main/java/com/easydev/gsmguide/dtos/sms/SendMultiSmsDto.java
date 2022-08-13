package com.easydev.gsmguide.dtos.sms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SendMultiSmsDto {
    private List<NumberDto> numbers ;
    private String message ;
}






