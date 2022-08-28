package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Location;
import com.easydev.gsmguide.services.LocationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/locations")
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService ;
    }

    @GetMapping()
    public List<Location> getAll() {
        return locationService.getAll();
    }

    @PostMapping()
    public Location add(@RequestBody Location location) {
        return locationService.add(location);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
         locationService.delete(id);
    }
}
