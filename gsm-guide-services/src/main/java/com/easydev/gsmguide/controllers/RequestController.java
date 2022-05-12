package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.RequestDto;
import com.easydev.gsmguide.dtos.RequestResponse;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.models.Request;
import com.easydev.gsmguide.services.RequestService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/requests")
public class RequestController {

    private final RequestService requestService ;

    public RequestController(RequestService requestService) {
        this.requestService = requestService ;
    }

    @PostMapping
    public Request add(@RequestBody RequestDto request) {
        return requestService.add(request) ;
    }

    @PostMapping("search")
    public RequestResponse getAll(@RequestBody SearchRequest request) {
        return requestService.getAll(request) ;
    }

    @PostMapping("client")
    public RequestResponse getAllByClient(@RequestBody SearchRequest request) {
        return requestService.getAllByClient(request) ;
    }

    @PostMapping("repairer")
    public RequestResponse getAllByRepairer(@RequestBody SearchRequest request) {
        return requestService.getAllByRepairer(request) ;
    }

    @PutMapping
    public Request update(@RequestBody Request request) {
        return requestService.update(request) ;
    }

}
