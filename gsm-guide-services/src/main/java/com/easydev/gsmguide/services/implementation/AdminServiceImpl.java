package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.JwtConfig;
import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.dtos.AuthenticationResponse;
import com.easydev.gsmguide.models.Admin;
import com.easydev.gsmguide.repositories.AdminRepository;
import com.easydev.gsmguide.services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository ;
    private final PasswordEncoder passwordEncoder;
    private final JwtConfig jwtConfig;

    public AdminServiceImpl(AdminRepository adminRepository ,
                            PasswordEncoder passwordEncoder ,
                            JwtConfig jwtConfig){
        this.adminRepository = adminRepository ;
        this.passwordEncoder = passwordEncoder ;
        this.jwtConfig = jwtConfig ;
    }

    @Override
    public List<Admin> getAll() {
        return adminRepository.findAll();
    }

    @Override
    public ResponseEntity<?> register(Admin toAddAdmin) {
        Admin admin = adminRepository.findByUsernameIgnoreCase(toAddAdmin.getUsername()).orElse(null) ;
        if (admin != null) {
            return new ResponseEntity<>("username exist", HttpStatus.NOT_FOUND);
        }
        toAddAdmin.setPassword(passwordEncoder.encode(toAddAdmin.getPassword()));
//        String code = Integer.toString(100000 + random.nextInt(899999) + 1);
//        this.mailingService.sendMail(new EmailDto(client.getEmail(), code));
        Admin newAdmin = adminRepository.save(toAddAdmin);
        return new ResponseEntity<>(newAdmin, HttpStatus.OK) ;
    }

    @Override
    public ResponseEntity<?> login(AuthenticationRequest request) {
        Admin admin = adminRepository.findByUsernameIgnoreCase(request.getUsername()).orElse(null) ;
        if (admin != null) {
            if (this.passwordEncoder.matches(request.getPassword(), admin.getPassword())) {
                String token = this.jwtConfig.generateToken(admin.getId() , admin.getUsername());
                return ResponseEntity.ok(new AuthenticationResponse(token , admin.getId() , null , 36000));
            } else {
                return new ResponseEntity<>("wrong password", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>("wrong username", HttpStatus.NOT_FOUND);
        }
    }


    @Override
    public void delete(long id) {
        adminRepository.deleteById(id);
    }
}
