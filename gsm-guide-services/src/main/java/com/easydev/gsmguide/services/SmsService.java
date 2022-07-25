package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.sms.SendSmsDto;

import java.io.IOException;

public interface SmsService {
    Object sendSms(SendSmsDto smsDto) throws IOException;
    Object getUsage() throws IOException;
}
