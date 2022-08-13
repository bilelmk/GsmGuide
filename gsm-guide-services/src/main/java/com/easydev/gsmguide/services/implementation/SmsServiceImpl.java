package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.dtos.*;
import com.easydev.gsmguide.dtos.sms.*;
import com.easydev.gsmguide.services.SmsService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
public class SmsServiceImpl implements SmsService {

    private final RestTemplate restTemplate;

    SmsServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate ;
    }

    public Object sendSms(SendSmsDto smsDto) throws IOException {
        TokenDto token = this.getToken() ;

        // headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token.getAccess_token());
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        OutboundSMSTextMessage outboundSMSTextMessage = new OutboundSMSTextMessage(smsDto.getMessage()) ;
        OutboundSMSMessageRequest outboundSMSMessageRequest = new OutboundSMSMessageRequest(
                "tel:+216" + smsDto.getNumber() ,
                "tel:+216" + 50109769 ,
                "CocoTunisia" ,
                outboundSMSTextMessage
        );
        SendSmsRequest smsRequest = new SendSmsRequest(outboundSMSMessageRequest) ;

        HttpEntity<SendSmsRequest> httpEntity = new HttpEntity<>(smsRequest , headers);

        return  restTemplate.exchange("https://api.orange.com/smsmessaging/v1/outbound/tel:+21650109769/requests" , HttpMethod.POST, httpEntity, Object.class);

    }

    public UsageDto getUsage() throws IOException {

        TokenDto token = this.getToken() ;

        // headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token.getAccess_token());
        headers.set("Accept", "application/json");

        HttpEntity<?> httpEntity = new HttpEntity<>(headers);

        return  restTemplate.exchange("https://api.orange.com/sms/admin/v1/contracts" , HttpMethod.GET, httpEntity, UsageDto.class).getBody();

    }

    private TokenDto getToken() throws IOException {
        // headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic cHozZkVDYTI4TVRNWUEwbXdhTUxjM0pMZ1VzRDRFQXg6bDhKZEZlNVd3QkJhSE1jbg==");
        headers.set("Content-Type", "application/x-www-form-urlencoded");
        headers.set("Accept", "application/json");

        // params
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("grant_type", "client_credentials");

        HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(map, headers);

        return  restTemplate.postForObject("https://api.orange.com/oauth/v3/token", httpEntity, TokenDto.class);
    }


}
