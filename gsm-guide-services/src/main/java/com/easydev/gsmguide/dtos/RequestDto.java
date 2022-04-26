package com.easydev.gsmguide.dtos;

import com.easydev.gsmguide.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestDto {
    private String date ;
    private long modelId ;
    private long markId ;
    private long articleId ;
    private long partId ;
    private long priceId ;
    private User client ;
}
