package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Repairer;
import com.easydev.gsmguide.repositories.RepairerRepository;
import com.easydev.gsmguide.services.RepairerService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepairerServiceImpl implements RepairerService {

    private final RepairerRepository repairerRepository ;
    private final PasswordEncoder passwordEncoder;

    public RepairerServiceImpl(RepairerRepository repairerRepository, PasswordEncoder passwordEncoder) {
        this.repairerRepository = repairerRepository ;
        this.passwordEncoder = passwordEncoder ;
    }

    @Override
    public List<Repairer> getAll() {
        return null;
    }

    @Override
    public Repairer add(Repairer repairer) {
        repairer.setPassword(passwordEncoder.encode(repairer.getPassword()));
        return repairerRepository.save(repairer);
    }

    @Override
    public Repairer update(Repairer repairer) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
