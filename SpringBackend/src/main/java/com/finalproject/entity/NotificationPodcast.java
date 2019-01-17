package com.finalproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;


@Entity
@Table(name="podcast_notifications")
public class NotificationPodcast {

	@Id
	@Column
	private int Id;
	@Column
	private String email;
	@Column(name="collection_name")
	private String collectionName;
	@Column(name="most_recent_episode")
	private String mostRecentEpisode;
	@Column(name="feed_url")
	private String feedUrl;
	
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCollectionName() {
		return collectionName;
	}
	public void setCollectionName(String collectionName) {
		this.collectionName = collectionName;
	}
	public String getMostRecentEpisode() {
		return mostRecentEpisode;
	}
	public void setMostRecentEpisode(String mostRecentEpisode) {
		this.mostRecentEpisode = mostRecentEpisode;
	}
	public String getFeedUrl() {
		return feedUrl;
	}
	public void setFeedUrl(String feedUrl) {
		this.feedUrl = feedUrl;
	}
	
	
}
