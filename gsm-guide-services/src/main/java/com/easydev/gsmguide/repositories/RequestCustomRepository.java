package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.dtos.RequestResponse;
import com.easydev.gsmguide.dtos.RequestSearchDto;
import com.easydev.gsmguide.models.Request;

import java.util.List;

public interface RequestCustomRepository {
    RequestResponse search(RequestSearchDto request);
}
