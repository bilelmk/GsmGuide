package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.services.SmsService;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.ValidationRequest;
import org.springframework.stereotype.Service;

@Service
public class SmsServiceImpl implements SmsService {

    public void sendSms() {
        Twilio.init("AC4216942755fcf752dccaeca679a96c6b", "c424a5922ec744e09785b898bd7ad838");
        Message message = Message.creator(
                        new com.twilio.type.PhoneNumber("+21626871743"),
                        new com.twilio.type.PhoneNumber("+15163448534"),
                        "Where's Wallace?")
                .create();
        System.out.println(message.getSid());
    }

    public void addTwilioNumber() {
        Twilio.init("AC4216942755fcf752dccaeca679a96c6b", "c424a5922ec744e09785b898bd7ad838");
        ValidationRequest validationRequest = ValidationRequest.creator(
                        new com.twilio.type.PhoneNumber("+14158675310"))
                .setFriendlyName("My Home Phone Number")
                .create();

        System.out.println(validationRequest.getFriendlyName());
    }
}
