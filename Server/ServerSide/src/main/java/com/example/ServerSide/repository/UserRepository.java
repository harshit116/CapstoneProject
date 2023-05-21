package com.example.ServerSide.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ServerSide.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	List<User> findByUsernameAndPassword(String username, String password);
}
