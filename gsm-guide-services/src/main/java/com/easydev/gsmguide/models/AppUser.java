package com.easydev.gsmguide.models;

import com.easydev.gsmguide.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Proxy(lazy = false)
public class AppUser {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String firstname ;
    private String lastname;
    private String username;
    private String phone;
    private String password ;
    private boolean isValid ;
    private boolean isConfirmed ;
    private Role role ;
    private String image ;
}
