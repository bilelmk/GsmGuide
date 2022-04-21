package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.models.Admin;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AdminService {
    public List<Admin> getAll();
    public ResponseEntity<?> register(Admin admin) ;
    public ResponseEntity<?> login(AuthenticationRequest request);
    public void delete(long id) ;
}
