package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Request;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Long> {
    List<Request>  findAllByOrderByCreationDateAsc(Pageable page);
}
