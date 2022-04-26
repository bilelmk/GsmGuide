package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.User;
import com.easydev.gsmguide.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserService userService ;

    public UserController(UserService userService) {
        this.userService = userService ;
    }

    @GetMapping("/role/{role}")
    public List<User> getAllByRole(@PathVariable Role role) {
        return userService.getAllByRole(role) ;
    }

    @GetMapping("{id}")
    public User getById(@PathVariable Long id) {
        return userService.getById(id) ;
    }

    @PostMapping
    public ResponseEntity<?> register(@RequestBody User user) {
        return userService.register(user) ;
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request) {
        return userService.login(request) ;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        userService.delete(id) ;
    }
}
