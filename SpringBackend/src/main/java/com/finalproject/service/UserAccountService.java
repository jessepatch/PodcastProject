package com.finalproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.entity.UserAccount;
import com.finalproject.repository.UserAccountRepository;

@Service
public class UserAccountService {
	
	@Autowired
	private UserAccountRepository userAccountRepository;
	
	
	public UserAccount login(String email, String user_password) {
		return this.userAccountRepository.login(email, user_password);
	}

	public void save(UserAccount userAccount) {
		userAccountRepository.save(userAccount);
	}

}
