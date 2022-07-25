package com.easydev.gsmguide.dtos.sms;

import lombok.Data;

import java.util.List;

@Data
public class PartnerContract {
    private String partnerId ;
    private List<Contract> contracts ;
}
