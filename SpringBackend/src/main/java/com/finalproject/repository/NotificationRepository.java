package com.finalproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.finalproject.entity.NotificationPodcast;

@Repository
public interface NotificationRepository extends JpaRepository<NotificationPodcast, Integer> {

	//for checking one user's notifications
	@Query("Select U from NotificationPodcast U where U.email = ?1")
	List<NotificationPodcast> getNotifications(String email);
	
	//for sending email notifications
	@Query("Select U from NotificationPodcast U")
	List<NotificationPodcast> checkNotifications();
}
