package com.finalproject.service;

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
}
