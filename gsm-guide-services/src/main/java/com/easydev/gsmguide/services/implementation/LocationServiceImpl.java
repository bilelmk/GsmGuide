package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Location;
import com.easydev.gsmguide.repositories.LocationRepository;
import com.easydev.gsmguide.services.LocationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {

    private final LocationRepository locationRepository ;

    LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository ;
    }

    @Override
    public Location add(Location location) {
        return locationRepository.save(location);
    }

    @Override
    public void delete(Long id) {
        locationRepository.deleteById(id);
    }

    @Override
    public List<Location> getAll() {
        return locationRepository.findAll();
    }
}
