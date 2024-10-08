package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.dtos.RequestDto;
import com.easydev.gsmguide.dtos.RequestResponse;
import com.easydev.gsmguide.dtos.RequestSearchDto;
import com.easydev.gsmguide.dtos.SearchRequest;
import com.easydev.gsmguide.enums.State;
import com.easydev.gsmguide.models.*;
import com.easydev.gsmguide.repositories.*;
import com.easydev.gsmguide.services.RequestService;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RequestServiceImpl implements RequestService {

    private final ArticleRepository articleRepository ;
    private final ModelRepository modelRepository ;
    private final PartRepository partRepository ;
    private final PriceRepository priceRepository ;
    private final MarkRepository markRepository ;
    private final RequestRepository requestRepository ;

    RequestServiceImpl(MarkRepository markRepository,
                       ModelRepository modelRepository,
                       ArticleRepository articleRepository,
                       PartRepository partRepository ,
                       PriceRepository priceRepository,
                       RequestRepository requestRepository) {
        this.markRepository = markRepository;
        this.modelRepository = modelRepository;
        this.articleRepository  = articleRepository;
        this.partRepository = partRepository ;
        this.priceRepository = priceRepository;
        this.requestRepository = requestRepository ;
    }

    @Override
    public RequestResponse search(RequestSearchDto searchDto) {
        return requestRepository.search(searchDto);
    }

    @Override
    public RequestResponse getAllByClient(@NotNull SearchRequest searchRequest) {
        Pageable page  = PageRequest.of(searchRequest.getOffset(), searchRequest.getLimit());

        Long count = (long) requestRepository.findAllByClientId(searchRequest.getId()).size();
        List<Request> rows = requestRepository.findAllByClientIdOrderByCreationDateAsc(searchRequest.getId() , page);

        return new RequestResponse(count ,rows) ;
    }

    @Override
    public RequestResponse getAllByRepairer(@NotNull SearchRequest searchRequest) {
        Pageable page  = PageRequest.of(searchRequest.getOffset(), searchRequest.getLimit());

        Long count = (long) requestRepository.findAllByRepairerId(searchRequest.getId()).size() ;
        List<Request> rows = requestRepository.findAllByRepairerIdOrderByCreationDateAsc( searchRequest.getId() , page);

        return new RequestResponse(count ,rows) ;
    }

    @Override
    public Request add(RequestDto request) {
        Mark mark = this.markRepository.findById(request.getMarkId()).orElseThrow(IllegalArgumentException::new);
        Model model = this.modelRepository.findById(request.getModelId()).orElseThrow(IllegalArgumentException::new);
        Article article = this.articleRepository.findById(request.getArticleId()).orElseThrow(IllegalArgumentException::new);

        if(request.getPartId() != null && request.getPriceId() != null) {
            Part part = this.partRepository.findById(request.getPartId()).orElseThrow(IllegalArgumentException::new);
            Price price = this.priceRepository.findById(request.getPriceId()).orElseThrow(IllegalArgumentException::new);
            return requestRepository.save(new Request(null ,request.getDate() , mark.getName() , model.getName() , article.getName() , part.getName() ,
                    price.getPrice(), request.getLocation() , request.getImei() , request.getDetails() , null, request.getClient()  , State.IN_PROGRESS ,
                    LocalDateTime.now(), request.isRequestDiagnostic()));
            
        }
        else {
            return requestRepository.save(new Request(null ,request.getDate() , mark.getName() , model.getName() , article.getName() , null,
                    null, request.getLocation() , request.getImei() , request.getDetails() , null, request.getClient()  , State.IN_PROGRESS ,
                    LocalDateTime.now(), request.isRequestDiagnostic()));
        }
    }

    @Override
    public Request update(Request request) {
        return requestRepository.save(request);
    }

//    @Override
//    public List<Object[]> findAllGroupByRepairer() {
//        return requestRepository.findAllGroupByRepairer();
//    }

    //    @Override
//    public RequestResponse getAll(@NotNull SearchRequest searchRequest) {
//        Pageable page  = PageRequest.of(searchRequest.getOffset(), searchRequest.getLimit());
//        int count = requestRepository.findAll().size() ;
//        List<Request> rows = requestRepository.findAllByOrderByCreationDateAsc(page);
//        return new RequestResponse(count ,rows) ;
//    }
}
