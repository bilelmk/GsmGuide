package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Actuality;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ActualityService {
    Actuality add(Actuality actuality, MultipartFile image);
    void delete(long id);
    List<Actuality> getAll();
}
