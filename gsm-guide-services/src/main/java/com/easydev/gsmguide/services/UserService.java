package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.AppUser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UserService {
    public List<AppUser> getAll() ;
    public ResponseEntity<?> register(AppUser client) throws IOException;
    public AppUser update(AppUser appUser);
    public void delete(Long id) ;
    public ResponseEntity<?> login(AuthenticationRequest request) ;
    public AppUser getById(Long id) ;
    public List<AppUser> getAllByRole(Role role);
    AppUser updateImage(MultipartFile image , AppUser appUser);
    ResponseEntity<?> addClient(AppUser appUser) throws IOException;
}
