package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Part;
import com.easydev.gsmguide.repositories.PartRepository;
import com.easydev.gsmguide.services.PartService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartServiceImpl implements PartService {

    private final PartRepository partRepository ;

    PartServiceImpl(PartRepository partRepository) {
        this.partRepository = partRepository ;
    }

    @Override
    public List<Part> getAll() {
        return partRepository.findAll();
    }

    @Override
    public Part add(Part part) {
        return partRepository.save(part);
    }

    @Override
    public void delete(long id) {
        partRepository.deleteById(id);
    }
}
