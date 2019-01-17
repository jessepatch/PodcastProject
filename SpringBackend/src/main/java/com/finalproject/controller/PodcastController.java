package com.finalproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.dto.NotificationAndSubscribedList;
import com.finalproject.entity.NotificationPodcast;
import com.finalproject.entity.Podcast;
import com.finalproject.service.NotificationService;
import com.finalproject.service.PodcastService;

@CrossOrigin
@RestController
public class PodcastController {

	@Autowired
	private PodcastService podcastService;
	
	@Autowired
	private NotificationService notificationService;
	
	@RequestMapping(value="/subscribe",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void subscribe(@RequestBody Podcast podcast) {
		this.podcastService.save(podcast);	
	}
	
	@RequestMapping(value="/unsubscribe",
			method=RequestMethod.POST
			)
	public void unsubscribe(@RequestBody String id) {
		this.podcastService.delete(id);
	}
	
	@RequestMapping(value="/home",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	public ResponseEntity<NotificationAndSubscribedList> home(String email) {
		List<Podcast> subscribedPodcasts = podcastService.getSubscriptions(email);
		List<NotificationPodcast> notificationPodcasts = notificationService.getNotifications(email);
		
		NotificationAndSubscribedList notificationAndSubscribedList = new NotificationAndSubscribedList();
		notificationAndSubscribedList.setSubscribedPodcasts(subscribedPodcasts);
		notificationAndSubscribedList.setNotificationPodcasts(notificationPodcasts);
		
		System.out.println("return subscribed podcasts" + subscribedPodcasts.get(0).toString());
		return new ResponseEntity<NotificationAndSubscribedList>(notificationAndSubscribedList, HttpStatus.OK);
	}
}
