package com.easydev.gsmguide.dtos;

import com.easydev.gsmguide.dtos.sms.OutboundSMSMessageRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SendSmsRequest {
    private OutboundSMSMessageRequest outboundSMSMessageRequest ;
}
