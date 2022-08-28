package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.models.Admin;
import com.easydev.gsmguide.services.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/admins")
public class AdminController {

    private final AdminService adminService ;

    public AdminController(AdminService adminService) {
        this.adminService = adminService ;
    }

    @GetMapping
    public List<Admin> getAll() {
        return adminService.getAll() ;
    }

    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody Admin admin) {
        return adminService.register(admin) ;
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request) {
        return adminService.login(request) ;
    }


    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        adminService.delete(id) ;
    }
}
