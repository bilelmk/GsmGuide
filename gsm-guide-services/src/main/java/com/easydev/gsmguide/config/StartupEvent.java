package com.easydev.gsmguide.config;

import com.easydev.gsmguide.models.Admin;
import com.easydev.gsmguide.services.AdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.security.crypto.password.PasswordEncoder;

@Component
@Slf4j
public class StartupEvent implements ApplicationListener<ApplicationReadyEvent> {
    @Autowired
    private AdminService adminservice;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {

            Admin admin = new Admin();
            admin.setUsername("admin");
            admin.setFirstname("admin");
            admin.setLastname("test");
            admin.setPassword(passwordEncoder.encode("0000"));
            adminservice.register(admin);

    }
}
