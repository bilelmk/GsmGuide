package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.AppUser;
import com.easydev.gsmguide.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/users")
public class UserController {

    private final UserService userService ;

    public UserController(UserService userService) {
        this.userService = userService ;
    }

    @GetMapping("/role/{role}")
    public List<AppUser> getAllByRole(@PathVariable Role role) {
        return userService.getAllByRole(role) ;
    }

    @GetMapping("{id}")
    public AppUser getById(@PathVariable Long id) {
        return userService.getById(id) ;
    }

    @PostMapping
    public ResponseEntity<?> register(@RequestBody AppUser appUser) throws IOException {
        return userService.register(appUser) ;
    }

    @PostMapping("client")
    public ResponseEntity<?> addClient(@RequestBody AppUser appUser) throws IOException {
        return userService.addClient(appUser) ;
    }

    @PostMapping("repairer")
    public ResponseEntity<?> addRepairer(@RequestBody AppUser appUser) {
        return userService.addRepairer(appUser) ;
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request) {
        return userService.login(request) ;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        userService.delete(id) ;
    }

    @PutMapping()
    public AppUser update(@RequestBody AppUser appUser) {
        return userService.update(appUser) ;
    }

    @PutMapping("image")
    public AppUser updateImage(@RequestPart("image") MultipartFile image,
                          @RequestPart("user") AppUser appUser) {
        return userService.updateImage(image , appUser) ;
    }
}
