package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsernameIgnoreCase(String email);

    List<User> findAllByRole(Role role);
}
