package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Repairer;
import com.easydev.gsmguide.services.RepairerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/repairers")
public class RepairerController {

    private final RepairerService repairerService ;

    public RepairerController(RepairerService repairerService) {
        this.repairerService = repairerService ;
    }

//    @GetMapping
//    public List<Client> getAll() {
//        return clientService.getAll() ;
//    }

    @PostMapping
    public Repairer add(@RequestBody Repairer repairer) {
        return repairerService.add(repairer) ;
    }

//    @PutMapping
//    public Category update(@RequestPart(value = "image", required = false) MultipartFile image ,
//                           @RequestPart("category") Category category) throws IOException {
//        return categoryService.update(image, category) ;
//    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        repairerService.delete(id) ;
    }
}
