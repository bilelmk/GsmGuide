package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

//  void deleteProductsByCategoryId(long id);

  // search
  @Query("SELECT p FROM Product p WHERE p.visible = :visible and ( p.name like :nameKey or p.description like :nameKey  ) ")
  List<Product> findAllByVisibleAndKey(boolean visible,String nameKey, Pageable page );
  @Query("SELECT p FROM Product p WHERE p.visible = :visible and ( p.name like :nameKey or p.description like :nameKey  ) ")
  List<Product> findAllByVisibleAndKey(boolean visible,String nameKey);

  // by client
  List<Product> findAllByVisibleAndClientId(boolean visible , Long id);
  List<Product> findAllByVisibleAndClientId(boolean visible , Long id ,Pageable page);

}
