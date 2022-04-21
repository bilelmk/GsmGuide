//package com.easydev.gsmguide.services.implementation;
//
//import com.easydev.gsmguide.dtos.EmailDto;
//import com.easydev.gsmguide.services.MailingService;
//import org.springframework.mail.MailException;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//@Service
//public class MailingServiceImpl implements MailingService {
//
//    private final JavaMailSender javaMailSender ;
//
//    public MailingServiceImpl(JavaMailSender javaMailSender) {
//        this.javaMailSender = javaMailSender ;
//    }
//
//    public void sendMail(EmailDto emailDto) throws MailException {
//        SimpleMailMessage mail = new SimpleMailMessage() ;
//        mail.setFrom("ifleet0701@gmail.com");
//        mail.setTo(emailDto.getEmail());
//        mail.setSubject("Subject");
//        mail.setText("Your Code : " + emailDto.getCode());
//        javaMailSender.send(mail);
//    }
//
//}
