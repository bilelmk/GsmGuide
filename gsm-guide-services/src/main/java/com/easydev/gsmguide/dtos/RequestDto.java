package com.easydev.gsmguide.dtos;

import com.easydev.gsmguide.models.AppUser;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestDto {
    private LocalDate date ;
    private Long modelId ;
    private Long markId ;
    private Long articleId ;
    private Long partId ;
    private Long priceId ;
    private AppUser client ;
    private String location ;
    private String imei ;
    private String details ;
    private boolean requestDiagnostic;
}
