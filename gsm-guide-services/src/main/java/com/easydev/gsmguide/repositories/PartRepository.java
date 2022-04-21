package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Part;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartRepository extends JpaRepository<Part, Long> {
}
