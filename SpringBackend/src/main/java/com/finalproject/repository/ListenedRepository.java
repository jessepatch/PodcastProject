package com.finalproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.finalproject.entity.ListenedPodcast;

@Repository
public interface ListenedRepository extends JpaRepository <ListenedPodcast, Integer>{

	@Query("Select U from ListenedPodcast U where U.collectionName = ?1 and U.email = ?2")
	List<ListenedPodcast> getListenedPodcasts(String collectionName, String email);
}
