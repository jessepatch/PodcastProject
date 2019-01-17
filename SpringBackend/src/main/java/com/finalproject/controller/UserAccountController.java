package com.finalproject.controller;

import java.util.ArrayList;
import java.util.HashMap;
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

import com.finalproject.entity.NotificationPodcast;
import com.finalproject.entity.UserAccount;
import com.finalproject.repository.UserAccountRepository;
import com.finalproject.service.SendMailService;
import com.finalproject.service.UserAccountService;

@CrossOrigin
@RestController
public class UserAccountController {
	
	@Autowired
	private UserAccountService userAccountService;
	
	@Autowired
	private SendMailService sendMail;

	@RequestMapping(value="/login", 
			produces=MediaType.APPLICATION_JSON_VALUE, 
			method = RequestMethod.POST
			)
	@ResponseBody
	public ResponseEntity<UserAccount> logIn(@RequestBody UserAccount userAccount){
		UserAccount tempUserAccount = userAccountService.login(userAccount.getEmail(), userAccount.getUser_password());
		return new ResponseEntity<>(tempUserAccount, HttpStatus.OK); 
	}
	
	@RequestMapping(value="/signup",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void signup(@RequestBody UserAccount userAccount) {
		sendMail.sendMail(userAccount.getEmail(), "Welcome, " + userAccount.getFirstName() + "to HorizonPod", "Hi " + userAccount.getFirstName() + " and welcome to the best podcast experience of your life. Now you can subscribe to podcasts, keep track of what you've already listened to and the website will also automatically keep track of your total time listened. We hope you enjoy the website, but also we thrive on your feedback. If you ever think of a feature you'd like to see, let us know and we will try to add it to the website. Our goal is user satisfaction! Thank you, Jesse Patch, Founder");
		this.userAccountService.save(userAccount);	
	}
	
	@RequestMapping(value="/test",
	consumes=MediaType.APPLICATION_JSON_VALUE,
	method=RequestMethod.POST
	)
	public void test(@RequestBody UserAccount userAccount) {
		RestTemplate restTemplate = new RestTemplate();
		
			String rss = restTemplate.getForObject("http://feeds.backtracks.fm/feeds/whatsgoodgames/whats-good-games-a-video-game-podcast/feed.xml", String.class);
			JSONObject xmlJSONObj = XML.toJSONObject(rss);
			
			//convert JSON to java
			Map<String, Object> map = new HashMap<String, Object>();
			map = xmlJSONObj.toMap();
			System.out.println(map);
	}
	
	
}
