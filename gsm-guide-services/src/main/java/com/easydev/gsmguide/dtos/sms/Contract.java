package com.easydev.gsmguide.dtos.sms;

import lombok.Data;

import java.util.List;

@Data
public class Contract {
    private String service;
    private String contractDescription ;
    private List<ServiceContract> serviceContracts;
}
