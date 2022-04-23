package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.UploadConfig;
import com.easydev.gsmguide.models.Product;
import com.easydev.gsmguide.repositories.ProductRepository;
import com.easydev.gsmguide.services.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

  private final ProductRepository productRepository;
  private final UploadConfig uploadService;

  public ProductServiceImpl(ProductRepository productRepository, UploadConfig uploadService){
    this.productRepository = productRepository ;
    this.uploadService = uploadService ;
  }
  public List<Product> getAll() {
    return productRepository.findAll();
  }

  public Product getById(Long id) {
    return productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
  }

  public Product save(MultipartFile file, String name, String description, double price, double promotionValue, boolean promotion, int quantity) {
    String newFileName = uploadService.upload(file);
    Product product = new Product() ;
    product.setName(name);
    product.setDescription(description);
    product.setImage("images/" + newFileName);
    product.setPrice(price);
    product.setQuantity(quantity);
    product.setVisible(true);
    return productRepository.save(product);
  }

  public Product update(Product product) {
    return productRepository.save(product);
  }

  public void deleteById(long id) {
    productRepository.deleteById(id);
  }

//  public void deleteByCategoryId(long id) {
//    productRepository.deleteProductsByCategoryId(id);
//  }

  public Product updateStatus(boolean visible, long id) {
    Product product = productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    product.setVisible(visible);
    return productRepository.save(product);
  }

//  public List<Product> getByCategoryId(long id) {
//    return productRepository.getByCategoryIdAndVisible(id , true) ;
//  }

  public Product update(long id, MultipartFile image, String name, String description, double price, double promotionValue, boolean promotion, int quantity) {
    Product product = productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    product.setName(name);
    product.setDescription(description);
    product.setPrice(price);
    product.setQuantity(quantity);
    if(image != null) {
      String newFileName = uploadService.upload(image);
      product.setImage("images/" + newFileName);
    }
    return productRepository.save(product);
  }
}
