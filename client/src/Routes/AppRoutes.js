import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import UserSignup from "../components/UserSignup";
import AdminSignup from "../components/AdminSignup";
import UserDashboard from "../components/UserDashboard";
import ListMovies from "../components/ListMovies";
import HorrorMovies from "../components/HorroMovies";
import CrimeMovies from "../components/CrimeMovies";
import RomanticMovies from "../components/RomanticMovies";
import ComedyMovies from "../components/ComedyMovies";
import SearchByName from "../components/SearchByName";
import MovieCart from "../components/MovieCart";
import AdminDashboard from "../components/AdminDashboard";
import EditMovieForm from "../components/EditMovieForm";
import PaymentSuccess from "../components/PaymentSuccess";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/signupuser" element={<UserSignup />} />
      <Route exact path="/signupadmin" element={<AdminSignup />} />
      <Route exact path="/userdashboard" element={<UserDashboard />} />
      <Route exact path="/userdashboard/allmovies" element={<ListMovies />} />
      <Route exact path="/userdashboard/horror" element={<HorrorMovies />} />
      <Route exact path="/userdashboard/crime" element={<CrimeMovies />} />
      <Route
        exact
        path="/userdashboard/romantic"
        element={<RomanticMovies />}
      />
      <Route exact path="/userdashboard/comedy" element={<ComedyMovies />} />
      <Route
        exact
        path="/userdashboard/searchedmovie"
        element={<SearchByName />}
      />
      <Route exact path="/userdashboard/cart" element={<MovieCart />} />
      <Route exact path="/admindashboard" element={<AdminDashboard />} />
      <Route exact path="/editmovieform" element={<EditMovieForm />} />
      <Route exact path="/userdashboard/successpage" element={<PaymentSuccess/>} />
    </Routes>
  );
}
