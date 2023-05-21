import React from "react";
import { useState, useEffect } from "react";
import NavbarAdmin from "./NavbarAdmin";
import MovieService from "../services/MovieService";
import axios from "axios";

export default function AdminListMovies() {
  const [movies, setMovies] = useState([]);
  const [movieToEdit, setMovieToEdit] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [genere, setGenere] = useState("");
  const [date_time, setDate_Time] = useState("");
  const [ticketprice, setTicektPrice] = useState("");
  const [stateUpdate, setStateUpdate] = useState(0);

  useEffect(() => {
    MovieService.getMovies().then((res) => {
      setMovies(res.data);
    });
  }, [stateUpdate]);

  const editMovie = (e) => {
    e.preventDefault();

    setMovieToEdit(e.target.parentElement.parentElement.firstChild.innerText);
  };

  const saveMovieEdit = async () => {
    const movieData = {
      name: name,
      description: description,
      language: language,
      genere: genere,
      date_time: date_time,
      ticketprice: ticketprice,
    };

    console.log(movieData);
    await axios
      .put(`http://localhost:8080/api/v1/movies/${movieToEdit}`, movieData)
      .then((response) => {
        setStateUpdate(stateUpdate + 1);
        alert("Moive updated successfully");
      })
      .catch((error) => {
        alert("Error occured while updating");
      });
  };

  return (
    <>
      <NavbarAdmin />
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
                Edit Movie
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
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Ticket Price
                    </label>
                    <input
                      type="number"
                      value={ticketprice}
                      onChange={(e) => {
                        setTicektPrice(e.target.value);
                      }}
                      className="form-control"
                      id="ticketprice"
                      name="ticketprice"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      className="form-control"
                      id="description"
                      name="description"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      Language
                    </label>
                    <input
                      type="text"
                      value={language}
                      onChange={(e) => {
                        setLanguage(e.target.value);
                      }}
                      className="form-control"
                      id="language"
                      name="language"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Genere
                    </label>
                    <input
                      type="text"
                      value={genere}
                      onChange={(e) => {
                        setGenere(e.target.value);
                      }}
                      className="form-control"
                      id="genere"
                      name="genere"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      Date_Time
                    </label>
                    <input
                      type="datetime-local"
                      value={date_time}
                      onChange={(e) => {
                        setDate_Time(e.target.value);
                      }}
                      className="form-control"
                      id="date_time"
                      name="date_time"
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
        <h2 className="text-center">Movies List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
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
                  <td>{movie.name}</td>
                  <td>{movie.description}</td>
                  <td>{movie.language}</td>
                  <td>{movie.genere}</td>
                  <td>{movie.date_time}</td>
                  <td>{movie.ticketprice}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => editMovie(e)}
                    >
                      Edit Movie
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
