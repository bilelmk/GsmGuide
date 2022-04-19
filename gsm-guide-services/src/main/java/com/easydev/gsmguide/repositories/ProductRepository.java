package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
  void deleteProductsByCategoryId(long id);
  List<Product> getByCategoryIdAndVisible(long id , boolean visible);
}
