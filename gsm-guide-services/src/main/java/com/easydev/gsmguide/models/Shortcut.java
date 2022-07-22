package com.easydev.gsmguide.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Shortcut {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name ;
    private String content ;

    @ManyToOne
    @JoinColumn(name = "markId" )
    private Mark mark ;
}
