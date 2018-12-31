package com.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.entity.Podcast;

@Repository
public interface PodcastRepository extends JpaRepository <Podcast, String>{
	
}
