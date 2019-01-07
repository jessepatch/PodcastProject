package com.finalproject.controller;

import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.finalproject.entity.UserAccount;
import com.finalproject.repository.UserAccountRepository;
import com.finalproject.service.UserAccountService;

@CrossOrigin
@RestController
public class UserAccountController {
	
	@Autowired
	private UserAccountService userAccountService;

	@RequestMapping(value="/rss/podcast", 
			produces=MediaType.APPLICATION_JSON_VALUE, 
			method = RequestMethod.GET
			)
	public  ResponseEntity<String> fetchRSSFeed(String feedUrl) {
		
		RestTemplate restTemplate = new RestTemplate();
		
		String rss = restTemplate.getForObject(feedUrl, String.class);
		
		JSONObject xmlJSONObj = XML.toJSONObject(rss);

		
		return new ResponseEntity<>(xmlJSONObj.toString(), HttpStatus.OK); 
	}
	
	
	@RequestMapping(value="/login", 
			produces=MediaType.APPLICATION_JSON_VALUE, 
			method = RequestMethod.POST
			)
	@ResponseBody
	public ResponseEntity<UserAccount> logIn(@RequestBody UserAccount userAccount){
		UserAccount tempUserAccount = userAccountService.login(userAccount.getEmail(), userAccount.getUser_password());
		return new ResponseEntity<>(tempUserAccount, HttpStatus.OK); 
	}
	
	@RequestMapping(value="/signup",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void signup(@RequestBody UserAccount userAccount) {
		this.userAccountService.save(userAccount);	
	}
	
	
}
