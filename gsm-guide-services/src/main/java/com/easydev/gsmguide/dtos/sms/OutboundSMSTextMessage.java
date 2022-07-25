package com.easydev.gsmguide.dtos.sms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OutboundSMSTextMessage {
    private String message ;
}
