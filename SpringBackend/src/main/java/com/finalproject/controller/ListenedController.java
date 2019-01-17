package com.finalproject.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.finalproject.dto.EpisodeListPlusListened;
import com.finalproject.entity.ListenedPodcast;
import com.finalproject.service.ListenedService;

@CrossOrigin
@RestController
public class ListenedController {

	@Autowired
	private ListenedService listenedService;
	
	@RequestMapping(value="/rss/podcas", 
			produces=MediaType.APPLICATION_JSON_VALUE, 
			method = RequestMethod.GET
			)
	public  ResponseEntity<String> fetchRSSFeed(String feedUrl) {
		
		//this path does not retrieve listened to episodes
		RestTemplate restTemplate = new RestTemplate();
		
		String rss = restTemplate.getForObject(feedUrl, String.class);
		
		JSONObject xmlJSONObj = XML.toJSONObject(rss);

		
		return new ResponseEntity<>(xmlJSONObj.toString(), HttpStatus.OK); 
	}
	@RequestMapping(value="/markListened",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void markListened(@RequestBody ListenedPodcast listenedPodcast) {
		this.listenedService.save(listenedPodcast);	
	}
	
	@RequestMapping(value="/unmarkListened",
			method=RequestMethod.POST
			)
	public void unmarkListened(@RequestBody String id) {
		this.listenedService.delete(id);	
	}
	
	@RequestMapping(value="/rss/podcast",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	@ResponseBody
	public ResponseEntity<EpisodeListPlusListened> getListenedPodcasts(String feedUrl, String collectionName, String email) {
		//Database call to listened podcasts
		List<ListenedPodcast> listenedPodcasts = listenedService.getListenedPodcasts(collectionName, email);
		
		//XML call and converts to JSON
		RestTemplate restTemplate = new RestTemplate();
		
		String rss = restTemplate.getForObject(feedUrl, String.class);
		
		JSONObject xmlJSONObj = XML.toJSONObject(rss);
		
		//convert JSON to java
		Map<String, Object> map = new HashMap<String, Object>();
		map = xmlJSONObj.toMap();
		
		//Returning two object in one
		EpisodeListPlusListened episodeListPlusListened = new EpisodeListPlusListened();
		episodeListPlusListened.setRssfeed(map);
		episodeListPlusListened.setListenedPodcasts(listenedPodcasts);
		
		return new ResponseEntity<EpisodeListPlusListened>(episodeListPlusListened, HttpStatus.OK);
	}
}
