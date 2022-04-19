package com.easydev.gsmguide.dtos;

import lombok.Data;

@Data
public class UpdateStatusRequest {
    private Long id ;
    private boolean status;
}
