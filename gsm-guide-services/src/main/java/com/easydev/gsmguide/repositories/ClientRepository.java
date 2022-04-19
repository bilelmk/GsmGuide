package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> { }
