package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.dtos.RequestResponse;
import com.easydev.gsmguide.dtos.RequestSearchDto;
import com.easydev.gsmguide.models.Request;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class RequestCustomRepositoryImpl implements RequestCustomRepository {

    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public RequestCustomRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager ;
        this.criteriaBuilder = entityManager.getCriteriaBuilder() ;
    }

    @Override
    public RequestResponse search(RequestSearchDto searchRequest) {

        // create request data query
        CriteriaQuery<Request> query = criteriaBuilder.createQuery(Request.class);
        Root<Request> requestRoot = query.from(Request.class);

        // create predicate
        List<Predicate> predicates = new ArrayList<>();
        if(searchRequest.getState() != null) {
            predicates.add(criteriaBuilder.equal(requestRoot.get("state"), searchRequest.getState()));
        }
        if(searchRequest.getRequestDiagnostic() != null) {
            predicates.add(criteriaBuilder.equal(requestRoot.get("requestDiagnostic"), searchRequest.getRequestDiagnostic()));
        }
        if(searchRequest.getDate() != null) {
            predicates.add(criteriaBuilder.equal(requestRoot.get("date"), searchRequest.getDate()));
        }
        if(searchRequest.getRepairerId() != null) {
            predicates.add(criteriaBuilder.equal(requestRoot.get("repairer").get("id") , searchRequest.getRepairerId()));
        }

        Predicate predicate = criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        query.where(predicate) ;

        // create query
        TypedQuery<Request> typedQuery = entityManager.createQuery(query) ;

        // add pagination
        typedQuery.setFirstResult(searchRequest.getOffset()*searchRequest.getLimit()) ;
        typedQuery.setMaxResults(searchRequest.getLimit()) ;

        // create count query
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class) ;
        Root<Request> countRoot = countQuery.from(Request.class) ;
        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate) ;
        Long count = entityManager.createQuery(countQuery).getSingleResult() ;

        return new RequestResponse(count,typedQuery.getResultList());
    }
}
