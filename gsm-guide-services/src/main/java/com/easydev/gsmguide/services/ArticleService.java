package com.easydev.gsmguide.services;


import com.easydev.gsmguide.models.Article;


public interface ArticleService {
    Article add(Article article) ;
    Article update(Article article) ;
    void delete(Long id) ;
}
