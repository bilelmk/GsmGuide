package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.UpdateStatusRequest;
import com.easydev.gsmguide.models.Product;
import com.easydev.gsmguide.services.ProductService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {

  private final ProductService productService;

  public ProductController(ProductService productService) {
    this.productService = productService ;
  }

//  @GetMapping("/load-list")
//  public List<Product> getAll() {
//    return productService.getAll();
//  }

  @GetMapping("{id}")
  public Product getById(@PathVariable("id") long id) {
    return productService.getById(id);
  }

//  @GetMapping("/category/{id}")
//  public List<Product> getByCategoryId(@PathVariable("id") long id) {
//    return productService.getByCategoryId(id);
//  }

  @PostMapping()
  public Product add(@RequestParam("image") MultipartFile image ,
                     @RequestParam("name") String name ,
                     @RequestParam("description") String description,
                     @RequestParam("price") double price,
                     @RequestParam("promotionValue") double promotionValue,
                     @RequestParam("promotion") boolean promotion,
                     @RequestParam("quantity") int quantity
  ) {
    return productService.save(image,name , description, price, promotionValue, promotion, quantity);
  }

  @PutMapping()
  public Product update(@RequestParam("id") long id ,
                        @RequestParam("image") MultipartFile image ,
                        @RequestParam("name") String name ,
                        @RequestParam("description") String description,
                        @RequestParam("price") double price,
                        @RequestParam("promotionValue") double promotionValue,
                        @RequestParam("promotion") boolean promotion,
                        @RequestParam("quantity") int quantity
  ) {
    return productService.update(id,image ,name , description, price, promotionValue, promotion, quantity);
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