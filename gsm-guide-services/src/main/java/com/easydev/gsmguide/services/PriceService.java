package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Price;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface PriceService {

    List<Price> getByArticleAndPart(long articleId , long partId) ;
    List<List<Price>> getByArticle(long articleId) ;
    Price add(Price price);
    Price update(Price price);
    void delete(long id) ;
}
