package com.easydev.gsmguide.dtos;

import com.easydev.gsmguide.models.Request;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestResponse {
    private Long count ;
    private List<Request> rows ;
}