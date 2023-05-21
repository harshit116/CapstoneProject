package com.example.ServerSide.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ServerSide.entity.Admin;
import com.example.ServerSide.repository.AdminRepository;


@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1/admin/")
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;
	
	
	
	@PostMapping("save")
	public String addAdmin(@RequestBody Admin admin) {
		adminRepository.save(admin);
		return "Admin has successfully Signed Up";
	}
	
	@PostMapping("signin")
	public boolean verifyUser(@RequestBody Admin admin) {
		List<Admin> list = adminRepository.findByUsernameAndPassword(admin.getUsername(), admin.getPassword());
		if (list.isEmpty()) {
			return false;
		} else {
			
			return true;
		}
	}
 
}
