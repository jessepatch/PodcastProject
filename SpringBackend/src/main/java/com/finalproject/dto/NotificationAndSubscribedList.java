package com.finalproject.dto;

import java.util.List;

import com.finalproject.entity.NotificationPodcast;
import com.finalproject.entity.Podcast;

public class NotificationAndSubscribedList {

	private List<NotificationPodcast> notificationPodcasts;
	private List<Podcast> subscribedPodcasts;
	
	public List<NotificationPodcast> getNotificationPodcasts() {
		return notificationPodcasts;
	}
	public void setNotificationPodcasts(List<NotificationPodcast> notificationPodcasts) {
		this.notificationPodcasts = notificationPodcasts;
	}
	public List<Podcast> getSubscribedPodcasts() {
		return subscribedPodcasts;
	}
	public void setSubscribedPodcasts(List<Podcast> subscribedPodcasts) {
		this.subscribedPodcasts = subscribedPodcasts;
	}
}
