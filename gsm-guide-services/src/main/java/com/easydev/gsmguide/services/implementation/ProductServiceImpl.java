package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.UploadConfig;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.models.Product;
import com.easydev.gsmguide.repositories.ProductRepository;
import com.easydev.gsmguide.services.ProductService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

  private final ProductRepository productRepository;
  private final UploadConfig uploadService;

  public ProductServiceImpl(ProductRepository productRepository, UploadConfig uploadService){
    this.productRepository = productRepository ;
    this.uploadService = uploadService ;
  }
  public List<Product> search(SearchRequest searchRequest) {
    Pageable page  = PageRequest.of(searchRequest.getOffset(), searchRequest.getLimit());
    return productRepository.findAllByNameContainingOrDescriptionContaining(searchRequest.getKey() , searchRequest.getKey() , page);
  }

  @Override
  public List<Product> getByClientId(SearchRequest searchRequest) {
    Pageable page  = PageRequest.of(searchRequest.getOffset(), searchRequest.getLimit());
    return productRepository.findByClientId(searchRequest.getId() , page);
  }

  public Product save(MultipartFile image, Product product) {
    String newFileName = uploadService.upload(image);
    product.setImage("images/" + newFileName);
    product.setVisible(true);
    product.setCreationDate(LocalDateTime.now());
    return productRepository.save(product);
  }

  public void deleteById(long id) {
    productRepository.deleteById(id);
  }

  public Product updateStatus(boolean visible, long id) {
    Product product = productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    product.setVisible(visible);
    return productRepository.save(product);
  }

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
