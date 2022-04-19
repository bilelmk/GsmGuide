package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Long> {}
