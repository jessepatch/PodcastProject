package com.finalproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="podcast_subscriptions")
public class Podcast {
		
		    @Id
			@Column(name="id")
			private int id;
			@Column(name="email")
			private String email;
			@Column(name="collection_name")
			private String collectionName;
			@Column (name="artwork_url600")
			private String artworkUrl600;
			@Column (name="feed_url")
			private String feedUrl;
			
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
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
			public String getArtworkUrl600() {
				return artworkUrl600;
			}
			public void setArtworkUrl600(String artworkUrl600) {
				this.artworkUrl600 = artworkUrl600;
			}
			public String getFeedUrl() {
				return feedUrl;
			}
			public void setFeedUrl(String feedUrl) {
				this.feedUrl = feedUrl;
			}
			
			@Override
			public String toString() {
				return this.collectionName;
			}
	
}
