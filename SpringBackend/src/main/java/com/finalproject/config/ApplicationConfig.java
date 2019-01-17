package com.finalproject.config;

import java.util.Properties;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
@Configuration
@EnableJpaRepositories(basePackages="com.finalproject.repository")
@EntityScan(basePackages="com.finalproject.entity")
@ComponentScan(basePackages="com.finalproject")
public class ApplicationConfig {
	
	@Bean
	  public JavaMailSender getJavaMailSender() {
	 JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	      mailSender.setHost("smtp.gmail.com");
	      mailSender.setPort(587);
	      
	      mailSender.setUsername("podcastnotification@gmail.com");
	      mailSender.setPassword("Taycri456?");
	 
	     Properties props = mailSender.getJavaMailProperties();
	     props.put("mail.transport.protocol", "smtp");
	      props.put("mail.smtp.auth", "true");
	     props.put("mail.smtp.starttls.enable", "true");
	      props.put("mail.debug", "true");
	       
	      return mailSender;
	  }
}

