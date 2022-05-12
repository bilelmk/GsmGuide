package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Model;
import com.easydev.gsmguide.repositories.ModelRepository;
import com.easydev.gsmguide.services.ModelService;
import org.springframework.stereotype.Service;

@Service
public class ModelServiceImpl implements ModelService {

    private final ModelRepository modelRepository ;

    public ModelServiceImpl(ModelRepository modelRepository) {
        this.modelRepository = modelRepository ;
    }

    @Override
    public Model add(Model model) {
        return modelRepository.save(model);
    }

    @Override
    public Model update(Model model) {
        Model toUpdateModel = modelRepository.findById(model.getModelId()).orElseThrow(IllegalArgumentException::new);
        toUpdateModel.setName(model.getName());
        return modelRepository.save(toUpdateModel);
    }
}
