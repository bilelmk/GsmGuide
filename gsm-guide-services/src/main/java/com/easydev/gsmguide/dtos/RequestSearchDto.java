package com.easydev.gsmguide.dtos;

import com.easydev.gsmguide.enums.State;
import lombok.Data;

import java.time.LocalDate;

@Data
public class RequestSearchDto {
    private Boolean requestDiagnostic ;
    private State state;
    private LocalDate date ;
    private Long repairerId ;
    private int limit ;
    private int offset ;
}
