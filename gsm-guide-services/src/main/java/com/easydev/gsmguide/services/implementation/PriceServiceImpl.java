package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Price;
import com.easydev.gsmguide.repositories.PriceRepository;
import com.easydev.gsmguide.services.PriceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriceServiceImpl implements PriceService {

    private final PriceRepository priceRepository ;

    PriceServiceImpl(PriceRepository priceRepository) {
        this.priceRepository = priceRepository ;
    }

    @Override
    public List<Price> getByArticleAndPart(long articleId, long partId) {
        return priceRepository.findAllByArticleIdAndPartId(articleId,partId);
    }
}
