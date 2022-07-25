package com.easydev.gsmguide.dtos.sms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OutboundSMSMessageRequest {
    private String address ;
    private String senderAddress ;
    private String senderName ;
    private OutboundSMSTextMessage outboundSMSTextMessage ;
}
