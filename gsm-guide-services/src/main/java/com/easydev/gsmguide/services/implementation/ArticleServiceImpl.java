package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Article;
import com.easydev.gsmguide.repositories.ArticleRepository;
import com.easydev.gsmguide.services.ArticleService;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService{

    private final ArticleRepository articleRepository ;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository ;
    }

    @Override
    public Article add(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public Article update(Article article) {
        Article toUpdateArticle = articleRepository.findById(article.getArticleId()).orElseThrow(IllegalArgumentException::new) ;
        toUpdateArticle.setName(article.getName());
        return articleRepository.save(toUpdateArticle);
    }

    @Override
    public void delete(Long id) {
        // you detach child from parent to delete (else deleting operation fail)
        Article article = articleRepository.findById(id).orElseThrow(IllegalArgumentException::new) ;
        article.setModel(null);
        articleRepository.delete(article);
    }
}
