package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Repairer;

import java.util.List;

public interface RepairerService {
    public List<Repairer> getAll() ;
    public Repairer add(Repairer repairer) ;
    public Repairer update(Repairer repairer);
    public void delete(Long id) ;
}
