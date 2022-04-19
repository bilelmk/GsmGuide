package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.UploadConfig;
import com.easydev.gsmguide.models.Category;
import com.easydev.gsmguide.models.Product;
import com.easydev.gsmguide.repositories.CategoryRepository;
import com.easydev.gsmguide.repositories.ProductRepository;
import com.easydev.gsmguide.services.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

  private final ProductRepository productRepository;
  private final UploadConfig uploadService;
  private final CategoryRepository categoryRepository;

  public ProductServiceImpl(ProductRepository productRepository, UploadConfig uploadService, CategoryRepository categoryRepository){
    this.productRepository = productRepository ;
    this.uploadService = uploadService ;
    this.categoryRepository = categoryRepository ;
  }
  public List<Product> getAll() {
    return productRepository.findAll();
  }

  public Product getById(Long id) {
    return productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
  }

  public Product save(MultipartFile file, String name, String description, double price, double promotionValue, boolean promotion, int quantity, long categoryId) {
    String newFileName = uploadService.upload(file);
    Category category = categoryRepository.findById(categoryId).orElseThrow(IllegalArgumentException::new) ;

    Product product = new Product() ;
    product.setName(name);
    product.setDescription(description);
    product.setPhotoName("images/" + newFileName);
    product.setPrice(price);
    product.setQuantity(quantity);
    product.setPromotionValue(promotionValue);
    product.setCategory(category);
    product.setPromotion(promotion);
    product.setVisible(true);
    return productRepository.save(product);
  }

  public Product update(Product product) {
    return productRepository.save(product);
  }

  public void deleteById(long id) {
    productRepository.deleteById(id);
  }

  public void deleteByCategoryId(long id) {
    productRepository.deleteProductsByCategoryId(id);
  }

  public Product updateStatus(boolean visible, long id) {
    Product product = productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    product.setVisible(visible);
    return productRepository.save(product);
  }

  public List<Product> getByCategoryId(long id) {
    return productRepository.getByCategoryIdAndVisible(id , true) ;
  }

  public Product update(long id, MultipartFile image, String name, String description, double price, double promotionValue, boolean promotion, int quantity, long categoryId) {
    Product product = productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    Category category = categoryRepository.findById(categoryId).orElseThrow(IllegalArgumentException::new) ;
    product.setName(name);
    product.setDescription(description);
    product.setPrice(price);
    product.setQuantity(quantity);
    product.setPromotionValue(promotionValue);
    product.setCategory(category);
    product.setPromotion(promotion);
    if(image != null) {
      String newFileName = uploadService.upload(image);
      product.setPhotoName("images/" + newFileName);
    }
    return productRepository.save(product);
  }
}
