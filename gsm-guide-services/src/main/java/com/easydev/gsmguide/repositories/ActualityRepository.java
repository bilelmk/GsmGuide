package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Actuality;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ActualityRepository extends JpaRepository<Actuality, Long>  {
    List<Actuality> getAllByOrderByDisplayOrder();
}
