package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceRepository extends JpaRepository<Price, Long> {
    List<Price> findAllByArticleArticleIdAndPartId(long articleId, long partId);

//    @Query(value = "SELECT id, quality, price  FROM price AS p GROUP BY p.part_id HAVING p.article_id = :articleId", nativeQuery = true)
    List<Price> findAllByArticleArticleId(long articleId);
}
