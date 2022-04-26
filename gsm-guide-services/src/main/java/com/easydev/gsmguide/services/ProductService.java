package com.easydev.gsmguide.services;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.models.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
  public Product save(MultipartFile image, Product product);
  public void deleteById(long id);
  public Product updateStatus(boolean visible, long id);
  List<Product> search(SearchRequest searchRequest);
  List<Product> getByClientId(SearchRequest searchRequest);
}