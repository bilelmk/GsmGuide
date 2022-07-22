package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.config.UploadConfig;
import com.easydev.gsmguide.models.Actuality;
import com.easydev.gsmguide.repositories.ActualityRepository;
import com.easydev.gsmguide.services.ActualityService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ActualityServiceImpl implements ActualityService {

    private final ActualityRepository actualityRepository ;
    private final UploadConfig uploadService ;

    ActualityServiceImpl(ActualityRepository actualityRepository, UploadConfig uploadService) {
        this.actualityRepository = actualityRepository ;
        this.uploadService = uploadService ;
    }

    @Override
    public List<Actuality> getAll() {
        return actualityRepository.getAllByOrderByDisplayOrder();
    }

    @Override
    public Actuality add(Actuality actuality , MultipartFile image) {
        String newFileName = uploadService.upload(image);
        actuality.setImage("images/" + newFileName);
        return actualityRepository.save(actuality) ;
    }

    @Override
    public void delete(long id) {
        actualityRepository.deleteById(id);
    }

}
