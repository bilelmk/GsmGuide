package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.JwtConfig;
import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.dtos.AuthenticationResponse;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.User;
import com.easydev.gsmguide.repositories.UserRepository;
import com.easydev.gsmguide.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository ;
    private final PasswordEncoder passwordEncoder;
    private final JwtConfig jwtConfig;
    private final Random random = new Random();

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           JwtConfig jwtConfig) {
        this.userRepository = userRepository ;
        this.passwordEncoder = passwordEncoder ;
        this.jwtConfig = jwtConfig;
    }

    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<?> register(User toAddClient) {
        User client = userRepository.findByUsernameIgnoreCase(toAddClient.getUsername()).orElse(null) ;
        if (client != null) {
            return new ResponseEntity<>("username exist", HttpStatus.NOT_FOUND);
        }
        toAddClient.setPassword(passwordEncoder.encode(toAddClient.getPassword()));
        toAddClient.setValid(true);
//        String code = Integer.toString(100000 + random.nextInt(899999) + 1);
//        this.mailingService.sendMail(new EmailDto(client.getEmail(), code));
        User newClient = userRepository.save(toAddClient);
        return new ResponseEntity<>(newClient, HttpStatus.OK) ;
    }

    @Override
    public User update(User client) {
        return null;
    }

    @Override
    public void delete(Long id) {}

    @Override
    public ResponseEntity<?> login(AuthenticationRequest request) {
        User client = this.userRepository.findByUsernameIgnoreCase(request.getUsername()).orElse(null);
        if (client != null) {
            if (this.passwordEncoder.matches(request.getPassword(), client.getPassword())) {
                 if (!client.isValid() ) {
                    return new ResponseEntity<>("blocked", HttpStatus.UNAUTHORIZED);
                }
                String token = this.jwtConfig.generateToken(client.getId() , client.getUsername());
                return ResponseEntity.ok(new AuthenticationResponse(token , client.getId() , null));
            } else {
                return new ResponseEntity<>("wrong password", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>("wrong username", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> getAllByRole(Role role) {
        return userRepository.findAllByRole(role);
    }
}
