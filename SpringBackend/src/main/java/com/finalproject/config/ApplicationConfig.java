package com.finalproject.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@Configuration
@EnableJpaRepositories(basePackages="com.finalproject.repository")
@EntityScan(basePackages="com.finalproject.entity")
@ComponentScan(basePackages="com.finalproject")
public class ApplicationConfig {
}

