package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Mark;

import java.util.List;

public interface MarkService {
    List<Mark> getAll();
    Mark add(Mark mark) ;
}
