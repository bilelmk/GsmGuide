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
public class Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long modelId;
    private String name;

    @ManyToOne
    @JoinColumn(name = "markId" )
    private Mark mark ;

    @OneToMany(fetch = FetchType.EAGER ,cascade = CascadeType.ALL)
    @JoinColumn(name="modelId" , referencedColumnName = "modelId")
    @JsonIgnoreProperties(value = {"model"}, allowSetters = true)
    private List<Article> articles ;
}
