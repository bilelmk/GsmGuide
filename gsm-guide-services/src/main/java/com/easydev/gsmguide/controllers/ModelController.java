package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Model;
import com.easydev.gsmguide.services.ModelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/models")
public class ModelController {

    private final ModelService modelService;

    public ModelController(ModelService modelService) {
        this.modelService = modelService ;
    }

    @GetMapping()
    public List<Model> getAll() {
        return modelService.getAll();
    }

    @PostMapping()
    public Model add(@RequestBody Model model) {
        return modelService.add(model);
    }

}
