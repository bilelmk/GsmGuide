package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.RequestDto;
import com.easydev.gsmguide.dtos.RequestResponse;
import com.easydev.gsmguide.dtos.RequestSearchDto;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.models.Request;

import java.util.List;

public interface RequestService {
    Request add(RequestDto request) ;
    Request update(Request request) ;

    RequestResponse search(RequestSearchDto searchDto);

    RequestResponse getAllByClient(SearchRequest searchRequest) ;
    RequestResponse getAllByRepairer(SearchRequest searchRequest) ;


//    List<Object[]> findAllGroupByRepairer() ;
//    RequestResponse getAll(SearchRequest searchRequest);
}

    