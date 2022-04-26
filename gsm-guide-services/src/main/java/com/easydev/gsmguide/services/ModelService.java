package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Model;

import java.util.List;

public interface ModelService {
    List<Model> getAll();
    Model add(Model model) ;
}
