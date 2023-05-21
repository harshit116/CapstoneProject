package com.example.ServerSide.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ServerSide.entity.Cart;



@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
Cart findByName(String name);

}
