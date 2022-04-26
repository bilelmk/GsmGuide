package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Part;
import com.easydev.gsmguide.services.PartService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/parts")
public class PartController {

    private final PartService partService ;

    public PartController(PartService partService) {
        this.partService = partService ;
    }

    @GetMapping
    public List<Part> getAll() {
        return partService.getAll() ;
    }

    @PostMapping
    public Part add(@RequestBody Part part) {
        return partService.add(part) ;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        partService.delete(id) ;
    }
}
