package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Part;
import com.easydev.gsmguide.models.Price;
import com.easydev.gsmguide.services.PartService;
import com.easydev.gsmguide.services.PriceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
