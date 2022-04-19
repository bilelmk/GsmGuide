package com.easydev.gsmguide.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

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
  private double promotionValue;
  private boolean promotion;
  private boolean visible;
  private String photoName;
  private int quantity;

  @ManyToOne
  private Category category;

}
