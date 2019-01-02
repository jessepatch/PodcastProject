package com.finalproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.entity.Podcast;
import com.finalproject.repository.PodcastRepository;

@Service
public class PodcastService {

	@Autowired
	private PodcastRepository podcastRepository;
	
	public void save(Podcast podcast) {
		podcastRepository.save(podcast);
	}
	
	public void delete(Podcast podcast) {
		podcastRepository.delete(podcast);
	}
	
	public List<Podcast> getSubscriptions(String email) {
		return podcastRepository.getSubscriptions(email);
	}
}
