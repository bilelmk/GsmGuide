package com.easydev.gsmguide.services;
import com.easydev.gsmguide.models.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
  public Product getById(Long id);
  public Product save(MultipartFile file, String name, String description, double price, double promotionValue, boolean promotion, int quantity, long categoryId);
  public Product update(Product product);
  public void deleteById(long id);
  public void deleteByCategoryId(long id);
  public Product updateStatus(boolean visible, long id);
  public List<Product> getByCategoryId(long id);
  public Product update(long id, MultipartFile image, String name, String description, double price, double promotionValue, boolean promotion, int quantity, long categoryId);
}