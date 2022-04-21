package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Mark;

import java.util.List;

public interface MarkService {
    public List<Mark> getAll();
    public Mark add(Mark mark) ;
}
