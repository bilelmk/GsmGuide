package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.JwtConfig;
import com.easydev.gsmguide.config.UploadConfig;
import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.dtos.AuthenticationResponse;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.AppUser;
import com.easydev.gsmguide.repositories.UserRepository;
import com.easydev.gsmguide.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository ;
    private final PasswordEncoder passwordEncoder;
    private final JwtConfig jwtConfig;
    private final Random random = new Random();
    private final UploadConfig uploadService;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           JwtConfig jwtConfig,
                           UploadConfig uploadService) {
        this.userRepository = userRepository ;
        this.passwordEncoder = passwordEncoder ;
        this.jwtConfig = jwtConfig;
        this.uploadService = uploadService ;
    }

    @Override
    public List<AppUser> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<?> register(AppUser toAddClient) {
        AppUser client = userRepository.findByUsernameIgnoreCase(toAddClient.getUsername()).orElse(null) ;
        if (client != null) {
            return new ResponseEntity<>("username exist", HttpStatus.NOT_FOUND);
        }
        toAddClient.setPassword(passwordEncoder.encode(toAddClient.getPassword()));
        toAddClient.setValid(true);
//        String code = Integer.toString(100000 + random.nextInt(899999) + 1);
//        this.mailingService.sendMail(new EmailDto(client.getEmail(), code));
        AppUser newClient = userRepository.save(toAddClient);
        return new ResponseEntity<>(newClient, HttpStatus.OK) ;
    }

    @Override
    public AppUser update(AppUser appUser) {
        AppUser toUpdateAppUser = userRepository.findById(appUser.getId()).orElseThrow(IllegalArgumentException::new) ;
        toUpdateAppUser.setFirstname(appUser.getFirstname());
        toUpdateAppUser.setLastname(appUser.getLastname());
        toUpdateAppUser.setPhone(appUser.getPhone());
        return userRepository.save(toUpdateAppUser) ;
    }

    @Override
    public void delete(Long id) {}

    @Override
    public ResponseEntity<?> login(AuthenticationRequest request) {
        AppUser client = this.userRepository.findByUsernameIgnoreCase(request.getUsername()).orElse(null);
        if (client != null) {
            if (this.passwordEncoder.matches(request.getPassword(), client.getPassword())) {
                 if (!client.isValid() ) {
                    return new ResponseEntity<>("blocked", HttpStatus.UNAUTHORIZED);
                }
                String token = this.jwtConfig.generateToken(client.getId() , client.getUsername());
                return ResponseEntity.ok(new AuthenticationResponse(token , client.getId() , client.getRole().toString()));
            } else {
                return new ResponseEntity<>("wrong password", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>("wrong username", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public AppUser getById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<AppUser> getAllByRole(Role role) {
        return userRepository.findAllByRole(role);
    }

    @Override
    public AppUser updateImage(MultipartFile image , AppUser appUser) {
        AppUser toUpdateAppUser = userRepository.findById(appUser.getId()).orElseThrow(IllegalArgumentException::new) ;
        String newFileName = uploadService.upload(image);
        toUpdateAppUser.setImage("images/" + newFileName);
        return userRepository.save(toUpdateAppUser);
    }
}
