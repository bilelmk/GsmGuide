package com.easydev.gsmguide.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchRequest {
    private long id ;
    private String key ;
    private int limit ;
    private int offset ;
}
