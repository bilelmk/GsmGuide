package com.easydev.gsmguide.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class ConfirmPhone {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String code;
    private boolean used;
    private LocalDateTime createdAt;
    private LocalDateTime expiresAt;
    @ManyToOne(optional = false)
    private AppUser account;
}
