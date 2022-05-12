package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Price;
import com.easydev.gsmguide.services.PriceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/prices")
public class PriceController {

    private final PriceService priceService ;

    public PriceController(PriceService priceService) {
        this.priceService = priceService ;
    }

    @GetMapping("{articleId}/{partId}")
    public List<Price> getByArticleAndPart(@PathVariable long articleId,@PathVariable long partId) {
        return priceService.getByArticleAndPart(articleId , partId) ;
    }

    @GetMapping("{articleId}")
    public List<List<Price>> getByArticle(@PathVariable long articleId) {
        return priceService.getByArticle(articleId) ;
    }

    @PostMapping
    public Price add(@RequestBody Price price) {
        return priceService.add(price) ;
    }

    @PutMapping
    public Price update(@RequestBody Price price) {
        return priceService.update(price) ;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        priceService.delete(id) ;
    }
}
