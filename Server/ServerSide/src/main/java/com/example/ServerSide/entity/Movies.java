package com.example.ServerSide.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="movies")
public class Movies {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private String name;
private String description;
private String language;
private String genere;
private String date_time;
private int ticketprice;

public Movies() {
	
}
public Movies(String name, String description, String language, String genere, String date_time,
		int ticketprice) {
	super();

	this.name = name;
	this.description = description;
	this.language = language;
	this.genere = genere;
	this.date_time = date_time;
	this.ticketprice = ticketprice;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getLanguage() {
	return language;
}
public void setLanguage(String language) {
	this.language = language;
}
public String getGenere() {
	return genere;
}
public void setGenere(String genere) {
	this.genere = genere;
}
public String getDate_time() {
	return date_time;
}
public void setDate_time(String date_time) {
	this.date_time = date_time;
}
public int getTicketprice() {
	return ticketprice;
}
public void setTicketprice(int ticketprice) {
	this.ticketprice = ticketprice;
}
@Override
public String toString() {
	return "Movies [id=" + id + ", name=" + name + ", description=" + description + ", language=" + language
			+ ", genere=" + genere + ", date_time=" + date_time + ", ticketprice=" + ticketprice + "]";
}

}
