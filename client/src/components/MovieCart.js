import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieService from "../services/MovieService";
import axios from "axios";
import NavbarUser from "./NavbarUser";

export default function MovieCart() {
  const [movies, setMovies] = useState([]);

  const [stateUpdate, setStateUpdate] = useState(0);

  useEffect(() => {
    MovieService.getCartMovies().then((res) => {
      setMovies(res.data);
    });
  }, [stateUpdate]);

  const removefromCart = async (e) => {
    e.preventDefault();

    const movieId = e.target.parentElement.parentElement.firstChild.innerText;
    await axios
      .delete(`http://localhost:8080/api/v1/cart/delete/${movieId}`)
      .then((response) => {
        setStateUpdate(stateUpdate + 1);
        alert("Moive removed from cart");
      })
      .catch((error) => {
        alert("Error in removing movie from cart");
      });
  };

  const editMovie = (e) => {
    e.preventDefault();

    //setMovieToEdit(e.target.parentElement.parentElement.firstChild.innerText);
  };

  return (
    <>
      <NavbarUser />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Payment Gateway
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container p-5">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      Billing Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Card Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="ticketprice"
                      name="ticketprice"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="description"
                      name="description"
                      min="10"
                      max="10"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      CVV
                    </label>
                    <input
                      type="number "
                      className="form-control"
                      id="language"
                      name="language"
                      min="3"
                      max="3"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => saveMovieEdit(e)}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 r">
        <h2 className="text-center">Cart</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Movie Name</th>
                <th>Movie Description</th>
                <th>Movie Language</th>
                <th>Movie Genere</th>
                <th>Movie Date And Time</th>
                <th>Movie Ticket Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.description}</td>
                  <td>{movie.language}</td>
                  <td>{movie.genere}</td>
                  <td>{movie.date_time}</td>
                  <td>{movie.ticketprice}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => removefromCart(e)}
                    >
                      Remove from Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/userdashboard/successpage">
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Proceed to Payment
        </button>
        </Link>
      </div>
    </>
  );
}
