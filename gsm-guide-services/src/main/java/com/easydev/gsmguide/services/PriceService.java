package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Price;

import java.util.List;

public interface PriceService {

    List<Price> getByArticleAndPart(long articleId , long partId) ;
}
