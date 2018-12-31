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
			@Column(name="podcast_name")
			private String podcast_name;
			@Column (name="img_url")
			private String img_url;
			@Column (name="feed_url")
			private String feed_url;
			
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
			public String getPodcast_name() {
				return podcast_name;
			}
			public void setPodcast_name(String podcast_name) {
				this.podcast_name = podcast_name;
			}
			public String getImg_url() {
				return img_url;
			}
			public void setImg_url(String img_url) {
				this.img_url = img_url;
			}
			public String getFeed_url() {
				return feed_url;
			}
			public void setFeed_url(String feed_url) {
				this.feed_url = feed_url;
			}
	
}
