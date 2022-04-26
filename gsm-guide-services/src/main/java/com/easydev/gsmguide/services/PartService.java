package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Part;

import java.util.List;

public interface PartService {
    List<Part> getAll();
    Part add(Part part) ;
    void delete(long id) ;
}
