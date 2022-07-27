package com.easydev.gsmguide.services;
import com.easydev.gsmguide.dtos.PageResponse;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.models.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
  Product save(MultipartFile image, Product product);
  void deleteById(long id);
  Product updateStatus(boolean visible, long id);
  PageResponse<Product> search(SearchRequest searchRequest);
  List<Product> getByClientId(SearchRequest searchRequest);
}