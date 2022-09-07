package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Model;
import com.easydev.gsmguide.services.ModelService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/models")
public class ModelController {

    private final ModelService modelService;

    public ModelController(ModelService modelService) {
        this.modelService = modelService ;
    }

    @PostMapping()
    public Model add(@RequestBody Model model) {
        return modelService.add(model);
    }

    @PutMapping()
    public Model update(@RequestBody Model model) {
        return modelService.update(model);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") long id) {
        modelService.delete(id);
    }
}

