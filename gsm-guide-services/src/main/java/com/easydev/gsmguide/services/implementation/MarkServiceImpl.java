package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Mark;
import com.easydev.gsmguide.repositories.MarkRepository;
import com.easydev.gsmguide.services.MarkService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkServiceImpl implements MarkService {

    private final MarkRepository markRepository ;

    public MarkServiceImpl(MarkRepository markRepository) {
        this.markRepository = markRepository ;
    }

    @Override
    public List<Mark> getAll() {
        return markRepository.findAll();
    }

    @Override
    public Mark add(Mark mark) {
        return markRepository.save(mark);
    }

    @Override
    public Mark update(Mark mark) {
        Mark toUpdateMark = markRepository.findById(mark.getMarkId()).orElseThrow(IllegalArgumentException::new) ;
        toUpdateMark.setName(mark.getName());
        return markRepository.save(toUpdateMark);
    }
}
