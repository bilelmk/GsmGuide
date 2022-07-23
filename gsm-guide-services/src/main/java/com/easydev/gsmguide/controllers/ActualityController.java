package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Actuality;
import com.easydev.gsmguide.services.ActualityService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/actualities")
public class ActualityController {

    private final ActualityService actualityService;

    public ActualityController(ActualityService actualityService) {
        this.actualityService = actualityService ;
    }

    @GetMapping()
    public List<Actuality> getALl() {
        return actualityService.getAll();
    }

    @PostMapping()
    public Actuality add(@RequestPart("image") MultipartFile image,
                         @RequestPart("actuality") Actuality actuality) {
        return actualityService.add(actuality, image);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") long id) {
        actualityService.delete(id);
    }
}
