package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Mark;
import com.easydev.gsmguide.services.MarkService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/marks")
public class MarkController {

    private final MarkService markService;

    public MarkController(MarkService markService) {
        this.markService = markService ;
    }

    @GetMapping()
    public List<Mark> getAll() {
        return markService.getAll();
    }

    @PostMapping()
    public Mark add(@RequestBody Mark mark) {
        return markService.add(mark);
    }

//    @DeleteMapping("{id}")
//    public void delete(@PathVariable("id") long id) {
//        markService.deleteById(id);
//    }
}
