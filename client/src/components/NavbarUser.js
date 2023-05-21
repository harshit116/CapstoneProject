import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NavbarUser() {
  const [name, setName] = useState("");
  const [searchedMovie, setSearchedMovie] = useState(null);
  const navigate = useNavigate();

  const getMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:8080/api/v1/movies/${name}`
    );
    const resdata = await response.data;
    navigate("/userdashboard/searchedmovie", { state: { movie: resdata } });
  };

  const logoutUser = async (e) => {
    e.preventDefault();
    await axios
      .delete(`http://localhost:8080/api/v1/cart/deleteAll`)
      .then(() => {
        alert("Logged Out From Dashboard");
      })

    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User Dashboard
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header bg-dark text-dark">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Dark offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body bg-dark">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item rounded-0 rounded-right rounded-bottom">
                  <Link className="nav-link" to="/userdashboard">
                    User Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movie Genres
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/userdashboard/crime">
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/userdashboard/romantic"
                      >
                        Romantic
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/userdashboard/horror"
                      >
                        Horror
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/userdashboard/comedy"
                      >
                        Comedy
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/userdashboard/allmovies"
                      >
                        All Movies
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item rounded-0 rounded-right rounded-bottom">
                  <Link className="nav-link" to="/userdashboard/cart">
                    Go To Cart
                  </Link>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Movie"
                  aria-label="Search"
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={(e) => {
                    getMovies(e);
                  }}
                >
                  Search
                </button>
              </form>
              <button
                type="button"
                className="btn btn-danger my-5"
                onClick={(e) => {
                  logoutUser(e);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
