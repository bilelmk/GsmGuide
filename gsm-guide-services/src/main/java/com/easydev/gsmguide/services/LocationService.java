package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Location;

import java.util.List;

public interface LocationService {
    Location add(Location location) ;
    void delete(Long id) ;
    List<Location> getAll();
}