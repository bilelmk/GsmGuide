package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.PageResponse;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.dtos.UpdateStatusRequest;
import com.easydev.gsmguide.models.Product;
import com.easydev.gsmguide.services.ProductService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("api/products")
public class ProductController {

  private final ProductService productService;

  public ProductController(ProductService productService) {
    this.productService = productService ;
  }

  @PostMapping("search")
  public PageResponse<Product> getAll(@RequestBody SearchRequest searchRequest) {
    return productService.search(searchRequest);
  }

  @PostMapping("client")
  public PageResponse<Product> getAllByClient(@RequestBody SearchRequest searchRequest) {
    return productService.getByClientId(searchRequest);
  }

  @PostMapping
  public Product add(@RequestPart("image") MultipartFile image ,
                     @RequestPart("product") Product product) {
    return productService.save(image ,product);
  }

  @DeleteMapping("{id}")
  public void delete(@PathVariable("id") long id) {
    productService.deleteById(id);
  }

  @PutMapping("/update-status")
  public Product update(@RequestBody UpdateStatusRequest request) {
    return productService.updateStatus(request.isStatus() , request.getId());
  }
}