package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Price;
import com.easydev.gsmguide.repositories.PriceRepository;
import com.easydev.gsmguide.services.PriceService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PriceServiceImpl implements PriceService {

    private final PriceRepository priceRepository ;

    PriceServiceImpl(PriceRepository priceRepository) {
        this.priceRepository = priceRepository ;
    }

    @Override
    public List<Price> getByArticleAndPart(long articleId, long partId) {
        return priceRepository.findAllByArticleArticleIdAndPartId(articleId,partId);
    }

    @Override
    public List<List<Price>> getByArticle(long articleId) {
        List<Price> prices = priceRepository.findAllByArticleArticleId(articleId);
        List<List<Price>> groupedPrices  = new ArrayList<>() ;
        for( int i=0; i<prices.size() ; i++) {
            if(i == 0){
                List<Price> temp = new ArrayList<>() ;
                temp.add(prices.get(0));
                groupedPrices.add(temp);
            }
            else {
                boolean isFound = false ;
                for(List<Price> groupedPrice : groupedPrices ) {
                    if(groupedPrice.get(0).getPart().getId() == prices.get(i).getPart().getId()) {
                        groupedPrice.add(prices.get(i));
                        isFound = true ;
                        break;
                    }
                }
                if(!isFound) {
                    List<Price> temp = new ArrayList<>() ;
                    temp.add(prices.get(i));
                    groupedPrices.add(temp);
                }
            }
        }
        return groupedPrices ;
    }

    @Override
    public Price addOrUpdate(Price price) {
        return priceRepository.save(price);
    }

    @Override
    public void delete(long id) {
        priceRepository.deleteById(id);
    }
}
