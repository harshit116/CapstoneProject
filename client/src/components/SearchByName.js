import React from "react";
import NavbarUser from "./NavbarUser";
import { useLocation } from "react-router-dom";

export default function SearchByName() {
  const { state } = useLocation();

  return (
    <div>
      <NavbarUser />

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
              {state && state.movie !== "" && (
                <tr key={state.movie.id}>
                  <td>{state.movie.name}</td>
                  <td>{state.movie.description}</td>
                  <td>{state.movie.language}</td>
                  <td>{state.movie.genere}</td>
                  <td>{state.movie.date_time}</td>
                  <td>{state.movie.ticketprice}</td>
                  <td>
                    <button type="submit" className="btn btn-dark">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              )}
              {state.movie === "" && (
                <tr>
                  <td>No Movies Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
