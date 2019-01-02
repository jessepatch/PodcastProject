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

import com.finalproject.entity.Podcast;
import com.finalproject.service.PodcastService;

@CrossOrigin
@RestController
public class PodcastController {

	@Autowired
	private PodcastService podcastService;
	
	@RequestMapping(value="/subscribe",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void subscribe(@RequestBody Podcast podcast) {
		this.podcastService.save(podcast);	
	}
	
	@RequestMapping(value="/home",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	public ResponseEntity<List<Podcast>> home(String email) {
		List<Podcast> subscribedPodcasts = podcastService.getSubscriptions(email);
		System.out.println("return subscribed podcasts" + subscribedPodcasts.get(0).toString());
		return new ResponseEntity<List<Podcast>>(subscribedPodcasts, HttpStatus.OK);
	}
}
