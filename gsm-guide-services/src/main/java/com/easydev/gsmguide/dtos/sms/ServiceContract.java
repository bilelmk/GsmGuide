package com.easydev.gsmguide.dtos.sms;

import lombok.Data;

@Data
public class ServiceContract {
    private String country ;
    private String service ;
    private String contractId ;
    private int availableUnits ;
    private String expires ;
    private String scDescription ;

}
