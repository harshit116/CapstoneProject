package com.example.ServerSide.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ServerSide.entity.Cart;
import com.example.ServerSide.entity.User;
import com.example.ServerSide.repository.CartRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/cart/")
public class CartController {

	@Autowired
	private CartRepository cartRepository;
	
	@GetMapping("listAll")
	public List<Cart> getAllCart(){
		return cartRepository.findAll();
	}
	
	@PostMapping("addtoCart")
	public String addUser(@RequestBody Cart cart) {
		cartRepository.save(cart);
		return "Movie added to cart";
	}
	
	@GetMapping("/{name}")
	public Cart getCart(@PathVariable("name") String name){
		return cartRepository.findByName(name);
	}
	
	@DeleteMapping(value="/delete/{id}")
	public String deleteMovie(@PathVariable("id") Integer id) {
		cartRepository.deleteById(id);
		return "Movie removed from cart";
	}
		
	@DeleteMapping("/deleteAll")
	public String deleteMovie() {
		cartRepository.deleteAll();
		return "All Movies Deleted";
	}
	

}
