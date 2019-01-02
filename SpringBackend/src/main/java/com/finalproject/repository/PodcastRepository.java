package com.finalproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.finalproject.entity.Podcast;

@Repository
public interface PodcastRepository extends JpaRepository <Podcast, String>{
	
	@Query("Select U from Podcast U where U.email = ?1")
	List<Podcast> getSubscriptions(String email);
		
}
