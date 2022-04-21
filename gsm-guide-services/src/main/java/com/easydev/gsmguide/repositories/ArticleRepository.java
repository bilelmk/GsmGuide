package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}
