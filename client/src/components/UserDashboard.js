import React from "react";
import NavbarUser from "./NavbarUser";
import ListMovies from "./ListMovies";

export default function UserDashboard() {
  return (
    <div>
      <NavbarUser />
      <div className="d-flex justify-content-center">
      <h2> Welcome to NMS Portal</h2>
    
      </div>
     <ListMovies />
    </div>
  );
}
