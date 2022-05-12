package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository  extends JpaRepository<Location, Long> {
}
