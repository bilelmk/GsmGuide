package com.easydev.gsmguide.utils;//package com.easydev.easynotes.utils;
//
//import com.igesa.hubseller.dto.common.GenericPageRequest;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.jpa.domain.Specification;
//
//import java.util.stream.Stream;
//
//public class PaginationUtil {
//    public static Specification buildTextSearchSpec(Stream<String> stream, String textSearch) {
//        return stream.map(u -> Specification.where((r, q, c) -> c.like(c.upper(r.get(u)), "%" + textSearch.toUpperCase().trim() + "%")))
//                .reduce((a, b) -> a.or(b)).orElseThrow(IllegalArgumentException::new);
//    }
//
//    public static PageRequest buildPageRequest(GenericPageRequest genericPageRequest) {
//        return PageRequest.of(
//                genericPageRequest.getPage() - 1,
//                genericPageRequest.getPageSize(),
//                Sort.Direction.valueOf(genericPageRequest.getSort().getDirection().name()),
//                genericPageRequest.getSort().getAttribute()
//        );
//    }
//}
