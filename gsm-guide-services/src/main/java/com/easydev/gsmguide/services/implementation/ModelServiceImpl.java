package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Model;
import com.easydev.gsmguide.repositories.ModelRepository;
import com.easydev.gsmguide.services.ModelService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelServiceImpl implements ModelService {

    private final ModelRepository modelRepository ;

    public ModelServiceImpl(ModelRepository modelRepository) {
        this.modelRepository = modelRepository ;
    }

    @Override
    public List<Model> getAll() {
        return modelRepository.findAll();
    }

    @Override
    public Model add(Model model) {
        return modelRepository.save(model);
    }
}
