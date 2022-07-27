package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
//  void deleteProductsByCategoryId(long id);
  List<Product> findAllByNameContainingOrDescriptionContaining(String nameKey , String descKey, Pageable page);

  List<Product> findAllByVisibleAndNameContainingOrDescriptionContaining(boolean visible ,String nameKey , String descKey, Pageable page );
  List<Product> findAllByVisible(boolean visible);
  List<Product> findAllByVisible(boolean visible, Pageable page);

  List<Product> findByClientId(long id , Pageable page);
}
