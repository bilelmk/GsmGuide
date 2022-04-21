package com.easydev.gsmguide.services;


import com.easydev.gsmguide.models.Article;

import java.util.List;

public interface ArticleService {
    public List<Article> getAll();
    public Article add(Article article) ;
}
