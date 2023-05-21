package com.example.ServerSide.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ServerSide.entity.Movies;
import com.example.ServerSide.entity.User;
import com.example.ServerSide.repository.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1/user/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("listUsers")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	
	@PostMapping("save")
	public String addUser(@RequestBody User user) {
		userRepository.save(user);
		return "User has successfully Signed Up";
	}
	
	@PostMapping("signin")
	public boolean verifyUser(@RequestBody User user) {
		List<User> list = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		if (list.isEmpty()) {
			return false;
		} else {
			
			return true;
		}
	}
 
}
