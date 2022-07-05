package com.easydev.gsmguide.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleId;
    private String name;

    @ManyToOne
    @JoinColumn(name = "modelId" )
    private Model model ;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JoinColumn(name="articleId" , referencedColumnName = "articleId")
    @JsonIgnoreProperties(value = {"article"}, allowSetters = true)
    private List<Price> prices;
}
