package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.RequestDto;
import com.easydev.gsmguide.models.Request;
import com.easydev.gsmguide.services.RequestService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
