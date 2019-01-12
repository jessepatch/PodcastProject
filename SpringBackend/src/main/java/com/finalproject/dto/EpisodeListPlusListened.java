package com.finalproject.dto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;

import com.finalproject.entity.ListenedPodcast;

public class EpisodeListPlusListened {

	Map<String, Object> rssfeed;
	List<ListenedPodcast> listenedPodcasts;
	
	public Map<String, Object> getRssfeed() {
		return rssfeed;
	}
	public void setRssfeed(Map<String, Object> map) {
		this.rssfeed = map;
	}
	public List<ListenedPodcast> getListenedPodcasts() {
		return listenedPodcasts;
	}
	public void setListenedPodcasts(List<ListenedPodcast> listenedPodcasts) {
		this.listenedPodcasts = listenedPodcasts;
	}
}
