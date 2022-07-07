package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.RequestDto;
import com.easydev.gsmguide.dtos.RequestResponse;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.models.Request;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface RequestService {
    Request add(RequestDto request) ;
    Request update(Request request) ;
    RequestResponse getAll(SearchRequest searchRequest);
    RequestResponse getAllByClient(SearchRequest searchRequest) ;
    RequestResponse getAllByRepairer(SearchRequest searchRequest) ;
    List<Object[]> findAllGroupByRepairer() ;
}

    