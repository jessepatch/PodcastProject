package com.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.finalproject.entity.Podcast;

@Repository
public interface PodcastRepository extends JpaRepository <Podcast, String>{
	
	@Query("Select U from podcast_subscriptions U where U.email = ?1")
	Podcast getSubscriptions(String email);
		
}
