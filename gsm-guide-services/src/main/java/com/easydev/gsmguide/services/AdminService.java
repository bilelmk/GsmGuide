package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.models.Admin;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AdminService {
    List<Admin> getAll();
    ResponseEntity<?> register(Admin admin) ;
    ResponseEntity<?> login(AuthenticationRequest request);
    void delete(long id) ;
}
