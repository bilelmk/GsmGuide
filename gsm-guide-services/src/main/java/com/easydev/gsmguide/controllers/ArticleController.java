package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Article;
import com.easydev.gsmguide.services.ArticleService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/articles")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService ;
    }

    @PostMapping()
    public Article add(@RequestBody Article article) {
        return articleService.add(article);
    }

    @PutMapping()
    public Article update(@RequestBody Article article) {
        return articleService.update(article);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") long id) {
        articleService.delete(id);
    }
}
