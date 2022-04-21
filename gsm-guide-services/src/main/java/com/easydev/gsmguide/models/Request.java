package com.easydev.gsmguide.models;

import com.easydev.gsmguide.enums.State;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Request {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private LocalDate date ;
    private String model ;
    private String brand ;

    @OneToOne
    private User repairer ;

    @OneToOne
    private User client ;

    private State state ;
}
