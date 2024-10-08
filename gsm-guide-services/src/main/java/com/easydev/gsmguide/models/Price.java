package com.easydev.gsmguide.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Price {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String quality ;

    private String price ;

    @ManyToOne
    @JoinColumn(name = "articleId" )
    private Article article ;
    
    @OneToOne
    private Part part ;
}
