package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Actuality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActualityRepository extends JpaRepository<Actuality, Long>  {
    List<Actuality> getAllByOrderByDisplayOrder();
}
