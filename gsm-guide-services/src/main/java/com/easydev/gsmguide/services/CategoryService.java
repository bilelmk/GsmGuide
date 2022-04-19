package com.easydev.gsmguide.services;


import com.easydev.gsmguide.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
  public List<Category> getAll();
  public Category getById(long id) ;
  public Category save(Category category) ;
  public Category update(Category category) ;
  public void deleteById(long id) ;
}
