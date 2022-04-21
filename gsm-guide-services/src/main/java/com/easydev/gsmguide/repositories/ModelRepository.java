package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRepository extends JpaRepository<Model, Long> {
}
