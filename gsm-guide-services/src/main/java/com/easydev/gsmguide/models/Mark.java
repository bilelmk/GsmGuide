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
public class Mark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long markId;
    private String name;

    @OneToMany(fetch = FetchType.EAGER ,cascade = CascadeType.ALL)
    @JoinColumn(name="markId" , referencedColumnName = "markId")
    @JsonIgnoreProperties(value = {"mark"}, allowSetters = true)
    private List<Model> models ;

    @OneToMany(cascade = CascadeType.ALL)
////    @JoinColumn(name="markId" , referencedColumnName = "markId")
//    @JsonIgnoreProperties(value = {"mark"}, allowSetters = true)
    private List<Shortcut> shortcuts ;
}
