package com.easydev.gsmguide.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String name;
  @Column(length = 3000)
  private String description;
  private double price;
  private boolean visible;
  private String image;
  private String status;
  private LocalDateTime creationDate ;

  @ManyToOne
  private AppUser client;

}
