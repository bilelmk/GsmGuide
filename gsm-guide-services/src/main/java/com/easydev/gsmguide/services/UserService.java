package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.AppUser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UserService {
    List<AppUser> getAll() ;
    ResponseEntity<?> register(AppUser client) throws IOException;
    AppUser update(AppUser appUser);
    void delete(Long id) ;
    ResponseEntity<?> login(AuthenticationRequest request) ;
    AppUser getById(Long id) ;
    List<AppUser> getAllByRole(Role role);
    AppUser updateImage(MultipartFile image , AppUser appUser);
    ResponseEntity<?> addClient(AppUser appUser) throws IOException;
    ResponseEntity<?> addRepairer(AppUser appUser);
}
