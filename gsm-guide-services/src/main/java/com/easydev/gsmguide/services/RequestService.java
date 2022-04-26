package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.RequestDto;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.models.Request;

import java.util.List;

public interface RequestService {
    Request add(RequestDto request) ;
    Request update(Request request) ;
    List<Request> getAll(SearchRequest searchRequest);
}
