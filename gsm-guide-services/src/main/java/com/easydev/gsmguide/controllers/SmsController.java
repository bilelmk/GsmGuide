package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.sms.SendMultiSmsDto;
import com.easydev.gsmguide.dtos.sms.SendSmsDto;
import com.easydev.gsmguide.dtos.sms.UsageDto;
import com.easydev.gsmguide.services.SmsService;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("api/sms")
public class SmsController {

    private final SmsService smsService ;

    public SmsController(SmsService smsService) {
        this.smsService = smsService ;
    }

    @PostMapping()
    public Object sendSms(@RequestBody SendSmsDto smsDto) throws IOException {
        return smsService.sendSms(smsDto);
    }

    @PostMapping("multi")
    public Object sendMultiSms(@RequestBody SendMultiSmsDto smsDto) throws IOException {
        return smsService.sendMultiSms(smsDto);
    }

    @GetMapping("usage")
    public UsageDto getUsage() throws IOException {
        return smsService.getUsage();
    }
}
