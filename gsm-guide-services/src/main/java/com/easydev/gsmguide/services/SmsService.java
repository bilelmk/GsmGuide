package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.sms.SendMultiSmsDto;
import com.easydev.gsmguide.dtos.sms.SendSmsDto;
import com.easydev.gsmguide.dtos.sms.UsageDto;

import java.io.IOException;

public interface SmsService {
    Object sendSms(SendSmsDto smsDto) throws IOException;
    Object sendMultiSms(SendMultiSmsDto smsDto) throws IOException;
    UsageDto getUsage() throws IOException;
}
