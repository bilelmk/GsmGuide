package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.enums.Role;
import com.easydev.gsmguide.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByUsernameIgnoreCase(String username);
    List<AppUser> findAllByRole(Role role);
    Optional<AppUser> findByPhone(String phone);
}
