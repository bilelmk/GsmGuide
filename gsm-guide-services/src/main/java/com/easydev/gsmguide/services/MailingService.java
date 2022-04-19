package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.EmailDto;

public interface MailingService {
    void sendMail(EmailDto emailDto);
}
