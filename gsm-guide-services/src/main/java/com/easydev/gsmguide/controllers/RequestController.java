package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.services.RequestService;
import com.easydev.gsmguide.services.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/requests")
public class RequestController {

    private final RequestService requestService ;

    public RequestController(RequestService requestService) {
        this.requestService = requestService ;
    }

}
