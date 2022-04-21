package com.easydev.gsmguide.config;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//@Component
//@Slf4j
//public class JwtRequestFilter extends OncePerRequestFilter {

//    @Autowired
//    private JwtConfig jwtConfig;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
//        final String requestTokenHeader = request.getHeader("Authorization");
//        String email = null;
//        String jwtToken = null;
//        // JWT Token is in the form "Bearer token". Remove Bearer word and get
//        // only the Token
//        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
//            jwtToken = requestTokenHeader.substring(7);
//            try {
//                email = jwtConfig.extractEmail(jwtToken);
//            } catch (IllegalArgumentException e) {
//                log.warn("Unable to get JWT Token");
//            } catch (ExpiredJwtException e) {
//                log.warn("JWT Token has expired");
//            }
//        } else {
//            log.debug("JWT Token does not begin with Bearer String");
//        }
//        // Once we get the token validate it.
//        if (
//                email != null
//                && SecurityContextHolder.getContext().getAuthentication() == null
//                && Boolean.TRUE.equals(jwtConfig.validateToken(jwtToken))
//        ) {
            // it's about client token
//            if (jwtTokenUtil.getTypeFromToken(jwtToken) != null && jwtTokenUtil.getTypeFromToken(jwtToken).equals("mobile")) {
//                VanityUserDetails clientDetails = userDetailsService.loadClientByEmail(username);
//                // if token is valid configure Spring Security to manually set
//                // authentication
//                clientDetails.setSellPointId(jwtTokenUtil.getCurrentSellPointFromToken(jwtToken));
//                clientDetails.setGroupId(jwtTokenUtil.getCurrentGroupFromToken(jwtToken));
//                clientDetails.setEmail(jwtTokenUtil.getCurrentEmailFromToken(jwtToken));
//                clientDetails.setCenterId(jwtTokenUtil.getCurrentCenterFromToken(jwtToken));
//                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
//                        clientDetails, null, null);
//                usernamePasswordAuthenticationToken
//                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                // After setting the Authentication in the context, we specify
//                // that the current user is authenticated. So it passes the
//                // Spring Security Configurations successfully.
//                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//            } else {
//                VanityUserDetails userDetails = userDetailsService.loadUserByUsername(username);
//                // if token is valid configure Spring Security to manually set
//                // authentication
//                userDetails.setSellPointId(jwtTokenUtil.getCurrentSellPointFromToken(jwtToken));
//                userDetails.setCenterId(jwtTokenUtil.getCurrentCenterFromToken(jwtToken));
//                userDetails.setGroupId(jwtTokenUtil.getCurrentGroupFromToken(jwtToken));
//                userDetails.setSellPointName(jwtTokenUtil.getCurrentSellPointNameFromToken(jwtToken));
//                userDetails.setGroupName(jwtTokenUtil.getCurrentGroupNameFromToken(jwtToken));
//                userDetails.setAuthorities(jwtTokenUtil.getAuthorities(jwtToken));
//                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
//                        userDetails, null, userDetails.getAuthorities());
//                usernamePasswordAuthenticationToken
//                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                // After setting the Authentication in the context, we specify
//                // that the current user is authenticated. So it passes the
//                // Spring Security Configurations successfully.
//                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//            }
//        }
//        chain.doFilter(request, response);
//    }
//}