package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    public List<User> getAll() ;
    public ResponseEntity<?> register(User client) ;
    public User update(User user);
    public void delete(Long id) ;
    public ResponseEntity<?> login(AuthenticationRequest request) ;
    public User getById(Long id) ;
    public List<User> getAllByRole(Role role);
    User updateImage(MultipartFile image ,User user);
}
