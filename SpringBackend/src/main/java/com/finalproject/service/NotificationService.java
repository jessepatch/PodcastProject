package com.finalproject.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.finalproject.dto.Rss;
import com.finalproject.entity.NotificationPodcast;
import com.finalproject.repository.NotificationRepository;

@Service
@EnableScheduling
public class NotificationService {

	@Autowired
	private NotificationRepository notificationRepository;
	
	@Autowired
	private JavaMailSender emailSender;

	@Scheduled(fixedRate = 3600000)
    public void checkNewEpisode() {
		
		RestTemplate restTemplate = new RestTemplate();
		
		ArrayList<NotificationPodcast> allNotifications = new ArrayList<NotificationPodcast>();
		allNotifications = (ArrayList<NotificationPodcast>) notificationRepository.checkNotifications();
		
		for(int x = 0; x < allNotifications.size(); x++) {
			String rssfeed = restTemplate.getForObject(allNotifications.get(x).getFeedUrl(), String.class);
			//JSONObject xmlJSONObj = XML.toJSONObject(rssfeed);
			
			//String rss = xmlJSONObj.toString();
			
			//String testString = "blahblahblah<item><title>80.This is the episode title</title>";
			String rssfeed1 = rssfeed.replaceAll(Pattern.quote("<![CDATA["), "");
			String rssfeed2 = rssfeed1.replaceAll(Pattern.quote("]]>"), "");
			
			String[] temprss = rssfeed2.split("<item>");
			String[] temprssexample = temprss[1].split("<title>");
			String[] episodes = temprssexample[1].split("</title>");
			String episodeTitle = episodes[0];
			
			if(!episodeTitle.equals(allNotifications.get(x).getMostRecentEpisode())) {
				sendNotificationMail(allNotifications.get(x).getEmail(), allNotifications.get(x).getCollectionName() + " has added a new episode", allNotifications.get(x).getCollectionName() + " has added a new episode: " + episodeTitle);
			}
			//convert JSON to java
//			Map<String, Object> map = new HashMap<String, Object>();
//			map = xmlJSONObj.toMap();
//			Rss rssfeed = new Rss();
//			rssfeed = (Rss) map;
//			rssfeed.channel.
		}
		//String rss = restTemplate.getForObject(feedUrl, String.class);
		
		for(int x = 0; x < allNotifications.size(); x++) {
			String rssfeed = restTemplate.getForObject(allNotifications.get(x).getFeedUrl(), String.class);
			
			String rssfeed1 = rssfeed.replaceAll(Pattern.quote("<![CDATA["), "");
			String rssfeed2 = rssfeed1.replaceAll(Pattern.quote("]]>"), "");
			
			//JSONObject xmlJSONObj = XML.toJSONObject(rssfeed);
			
			//String rss = xmlJSONObj.toString();
			
			//String testString = "blahblahblah<item><title>80.This is the episode title</title>";
			
			String[] temprss = rssfeed2.split("<item>");
			String[] temprssexample = temprss[1].split("<title>");
			String[] episodes = temprssexample[1].split("</title>");
			String episodeTitle = episodes[0];
			
			if(!episodeTitle.equals(allNotifications.get(x).getMostRecentEpisode())) {
				notificationRepository.updateLatestEpisode(allNotifications.get(x).getCollectionName(), episodeTitle);
			}
			//convert JSON to java
//			Map<String, Object> map = new HashMap<String, Object>();
//			map = xmlJSONObj.toMap();
//			Rss rssfeed = new Rss();
//			rssfeed = (Rss) map;
//			rssfeed.channel.
		}

		
    }
	
	public void sendNotificationMail(String toEmail, String subject, String msg) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(toEmail);
		message.setSubject(subject);
		message.setText(msg);


		emailSender.send(message);
	}
	
	public void save(NotificationPodcast notificationPodcast) {
		notificationRepository.save(notificationPodcast);
	}
	
	public void delete(String index) {
		int tempInt = Integer.parseInt(index);
		notificationRepository.delete(tempInt);
	}
	
	public List<NotificationPodcast> getNotifications(String email) {
		return notificationRepository.getNotifications(email);
	}
	
}
