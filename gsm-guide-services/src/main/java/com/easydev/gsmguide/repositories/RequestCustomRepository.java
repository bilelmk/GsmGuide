package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.dtos.RequestResponse;
import com.easydev.gsmguide.dtos.RequestSearchDto;
import org.springframework.stereotype.Repository;


@Repository
public interface RequestCustomRepository {
    RequestResponse search(RequestSearchDto request);
}
