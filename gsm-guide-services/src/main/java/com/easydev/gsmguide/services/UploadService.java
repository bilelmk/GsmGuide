package com.easydev.gsmguide.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UploadService {
    byte[] getImage(String imageId) ;
    String saveImage(MultipartFile image) throws IOException ;
}
