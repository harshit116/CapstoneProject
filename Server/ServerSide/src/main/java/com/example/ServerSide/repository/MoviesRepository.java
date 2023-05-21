package com.example.ServerSide.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ServerSide.entity.Movies;


@Repository
public interface MoviesRepository extends JpaRepository<Movies, Integer> {
List<Movies> findByGenere(String genere);
Movies findByName(String name);

}
