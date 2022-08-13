package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.JwtConfig;
import com.easydev.gsmguide.config.UploadConfig;
import com.easydev.gsmguide.dtos.AuthenticationRequest;
import com.easydev.gsmguide.dtos.AuthenticationResponse;
import com.easydev.gsmguide.dtos.sms.SendSmsDto;
import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.AppUser;
import com.easydev.gsmguide.models.ConfirmPhone;
import com.easydev.gsmguide.models.RecoverPassword;
import com.easydev.gsmguide.repositories.ConfirmPhoneRepository;
import com.easydev.gsmguide.repositories.UserRepository;
import com.easydev.gsmguide.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository ;
    private final PasswordEncoder passwordEncoder;
    private final JwtConfig jwtConfig;
    private final Random random = new Random();
    private final UploadConfig uploadService;
    private final SmsServiceImpl smsService;
    private final ConfirmPhoneRepository confirmPhoneRepository;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           JwtConfig jwtConfig,
                           UploadConfig uploadService,
                           SmsServiceImpl smsService,
                           ConfirmPhoneRepository confirmPhoneRepository) {
        this.userRepository = userRepository ;
        this.passwordEncoder = passwordEncoder ;
        this.jwtConfig = jwtConfig;
        this.uploadService = uploadService ;
        this.smsService = smsService ;
        this.confirmPhoneRepository = confirmPhoneRepository;
    }

    @Override
    public List<AppUser> getAll() {
        return null;
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
    public ResponseEntity<?> addClient(AppUser toAddClient) throws IOException {
        AppUser clientByUsername = userRepository.findByUsernameIgnoreCase(toAddClient.getUsername()).orElse(null) ;
        AppUser clientByPhone = userRepository.findByPhone(toAddClient.getPhone()).orElse(null) ;
        String password = Integer.toString(100000 + random.nextInt(899999) + 1);
        if (clientByUsername != null) {
            return new ResponseEntity<>("username exist", HttpStatus.NOT_FOUND);
        }
        if (clientByPhone != null) {
            return new ResponseEntity<>("phone exist", HttpStatus.NOT_FOUND);
        }
        this.smsService.sendSms(new SendSmsDto(toAddClient.getPhone() , "Nom d'utilisateur : " + toAddClient.getUsername() + "  -  Mot de passe : " + password)) ;

        toAddClient.setPassword(passwordEncoder.encode(password));
        toAddClient.setValid(true);
        toAddClient.setConfirmed(true);
        toAddClient.setRole(Role.CLIENT);
        AppUser newClient = userRepository.save(toAddClient);
        return new ResponseEntity<>(newClient, HttpStatus.OK) ;
    }

    @Override
    public ResponseEntity<?> addRepairer(AppUser appUser) {
        AppUser clientByUsername = userRepository.findByUsernameIgnoreCase(appUser.getUsername()).orElse(null) ;
        AppUser clientByPhone = userRepository.findByPhone(appUser.getPhone()).orElse(null) ;
        if (clientByUsername != null) {
            return new ResponseEntity<>("username exist", HttpStatus.NOT_FOUND);
        }
        if (clientByPhone != null) {
            return new ResponseEntity<>("phone exist", HttpStatus.NOT_FOUND);
        }
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        appUser.setValid(true);
        appUser.setConfirmed(true);
        appUser.setRole(Role.REPAIRER);
        AppUser newRepairer = userRepository.save(appUser);
        return new ResponseEntity<>(newRepairer, HttpStatus.OK) ;
    }

    @Override
    public ResponseEntity<?> register(AppUser toAddClient) throws IOException {
        AppUser clientByUsername = userRepository.findByUsernameIgnoreCase(toAddClient.getUsername()).orElse(null) ;
        AppUser clientByPhone = userRepository.findByPhone(toAddClient.getPhone()).orElse(null) ;
        String code = Integer.toString(100000 + random.nextInt(899999) + 1);
        if (clientByPhone != null) {
            return new ResponseEntity<>("phone exist", HttpStatus.NOT_FOUND);
        }
        if (clientByUsername != null) {
            return new ResponseEntity<>("username exist", HttpStatus.NOT_FOUND);
        }

        // add user
        toAddClient.setPassword(passwordEncoder.encode(toAddClient.getPassword()));
        toAddClient.setValid(true);
        toAddClient.setConfirmed(false);
        AppUser newClient = userRepository.save(toAddClient);

        // add confirm code
        ConfirmPhone confirmPhone = new ConfirmPhone();
        confirmPhone.setAccount(newClient);
        confirmPhone.setCode(code);
        confirmPhone.setCreatedAt(LocalDateTime.now());
        confirmPhone.setExpiresAt(LocalDateTime.now().plusHours(24));
        confirmPhoneRepository.save(confirmPhone);

        // send sms
        SendSmsDto sendSmsDto = new SendSmsDto();
        sendSmsDto.setNumber(toAddClient.getPhone());
        sendSmsDto.setMessage(code);
        smsService.sendSms(sendSmsDto);

        return new ResponseEntity<>(newClient, HttpStatus.OK) ;
    }

    @Override
    public ResponseEntity<?> login(AuthenticationRequest request) {
        AppUser client = this.userRepository.findByUsernameIgnoreCase(request.getUsername()).orElse(null);
        if (client != null) {
            if (this.passwordEncoder.matches(request.getPassword(), client.getPassword())) {
                if (!client.isValid() ) {
                    return new ResponseEntity<>("blocked", HttpStatus.UNAUTHORIZED);
                }
                if (!client.isConfirmed() ) {
                    return new ResponseEntity<>("phone not confirmed", HttpStatus.UNAUTHORIZED);
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
    public AppUser updateImage(MultipartFile image , AppUser appUser) {
        AppUser toUpdateAppUser = userRepository.findById(appUser.getId()).orElseThrow(IllegalArgumentException::new) ;
        String newFileName = uploadService.upload(image);
        toUpdateAppUser.setImage("images/" + newFileName);
        return userRepository.save(toUpdateAppUser);
    }
}
