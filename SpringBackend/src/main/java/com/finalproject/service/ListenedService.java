package com.finalproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.entity.ListenedPodcast;
import com.finalproject.repository.ListenedRepository;

@Service
public class ListenedService {
	
	@Autowired
	private ListenedRepository listenedRepository;
	
	public void save(ListenedPodcast listenedPodcast) {
		listenedRepository.save(listenedPodcast);
	}
	
	public void delete(String id) {
		int tempId = Integer.parseInt(id);
		listenedRepository.delete(tempId);
	}
	
	public List<ListenedPodcast> getListenedPodcasts(String collectionName, String email) {
		return listenedRepository.getListenedPodcasts(collectionName, email);
	}
}
