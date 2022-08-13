package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.ConfirmPhone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface ConfirmPhoneRepository extends JpaRepository<ConfirmPhone, Long> {
    boolean existsByCodeAndExpiresAtGreaterThanAndUsed(String token , LocalDateTime now, boolean b);
    ConfirmPhone findByCode(String code);
}
