package com.easydev.gsmguide.models;

import com.easydev.gsmguide.enums.State;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Request {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String date ;

    private String mark ;
    private String model ;
    private String article ;
    private String part ;
    private String price ;
    @OneToOne
    private User repairer ;

    @OneToOne
    private User client ;

    private State state ;

    private LocalDateTime creationDate ;
}
