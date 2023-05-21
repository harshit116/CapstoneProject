package com.example.ServerSide.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ServerSide.entity.Admin;


@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	List<Admin> findByUsernameAndPassword(String username, String password);
}
