package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.RecoverPassword;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.Optional;

public interface RecoverPasswordRepository extends JpaRepository<RecoverPassword, Long> {

    boolean existsByCodeAndExpiresAtGreaterThanAndUsed(String token , LocalDateTime now, boolean b);

    Optional<RecoverPassword> findByCodeAndUsed(String token, boolean b);
}
