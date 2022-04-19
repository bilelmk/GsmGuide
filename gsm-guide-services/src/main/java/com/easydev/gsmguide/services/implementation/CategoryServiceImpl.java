package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Category;
import com.easydev.gsmguide.repositories.CategoryRepository;
import com.easydev.gsmguide.services.CategoryService;
import com.easydev.gsmguide.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

  private final CategoryRepository categoryRepository;
  private final ProductService productService;

  public CategoryServiceImpl(CategoryRepository categoryRepository , ProductService productService) {
    this.categoryRepository= categoryRepository ;
    this.productService = productService ;
  }
  public List<Category> getAll() {
    return categoryRepository.findAll();
  }

  public Category getById(long id) {
    return categoryRepository.findById(id).orElseThrow(IllegalArgumentException::new);
  }

  public Category save(Category category) {
    return categoryRepository.save(category);
  }

  public Category update(Category category) {
    return categoryRepository.save(category);
  }

  public void deleteById(long id) {
    productService.deleteByCategoryId(id);
    categoryRepository.deleteById(id);
  }
}
