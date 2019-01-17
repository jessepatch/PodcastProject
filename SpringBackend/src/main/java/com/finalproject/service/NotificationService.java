package com.finalproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.finalproject.entity.NotificationPodcast;
import com.finalproject.repository.NotificationRepository;

@Service
public class NotificationService {

	@Autowired
	private NotificationRepository notificationRepository;
	
	@Autowired
	private JavaMailSender emailSender;

	@Scheduled(fixedRate = 3600000)
    public void checkNewEpisode() {
		
		String rss = restTemplate.getForObject(feedUrl, String.class);

		
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
