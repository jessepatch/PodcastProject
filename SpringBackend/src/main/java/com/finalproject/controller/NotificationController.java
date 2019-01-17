package com.finalproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.entity.NotificationPodcast;
import com.finalproject.entity.Podcast;
import com.finalproject.service.NotificationService;

@RestController
@CrossOrigin
public class NotificationController {
	
	@Autowired
	private NotificationService notificationService;

	@RequestMapping(value="/receiveNotification",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void receiveNotifications(@RequestBody NotificationPodcast notificationPodcast) {
		this.notificationService.save(notificationPodcast);	
	}
	
	@RequestMapping(value="/stopReceivingNotification",
			method=RequestMethod.POST
			)
	public void stopReceivingNotifications(@RequestBody String index) {
		this.notificationService.delete(index);
	}
}
