package com.finalproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_account")
public class UserAccount {
	
	    @Id
		@Column(name="email")
		private String email;
		@Column(name="first_name")
		private String first_name;
		@Column(name="last_name")
		private String last_name;
		@Column (name="user_password")
		private String user_password;
		
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getFirstName() {
			return first_name;
		}
		public void setFirstName(String first_name) {
			this.first_name = first_name;
		}
		public String getLastName() {
			return last_name;
		}
		public void setLastName(String last_name) {
			this.last_name = last_name;
		}
		public String getPassword() {
			return user_password;
		}
		public void setPassword(String user_password) {
			this.user_password = user_password;
		}
		
}
