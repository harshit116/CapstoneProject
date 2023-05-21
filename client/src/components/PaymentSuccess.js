import React, { useState } from "react";
import NavbarUser from "./NavbarUser";
import axios from "axios";

export default function PaymentSuccess() {
const [getMovie, setGetMovie]=useState([]);
const [finalSum,setFinalSum]=useState(0);

const getSummary= async(e)=>{
var responseData=null;
var totalSum=0;
  await axios.get("http://localhost:8080/api/v1/cart/listAll").then((response)=>{
    setGetMovie(response.data);
    responseData=response.data;
  });
  
  responseData.map((movie)=>{totalSum=(movie.ticketprice + totalSum);});
  setFinalSum(totalSum);
}

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
                Payment Summary
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
              <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Movie Name</th>
                <th>Movie Date And Time</th>
                <th>Movie Ticket Price</th>
              </tr>
            </thead>
            <tbody>
              {getMovie.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.date_time}</td>
                  <td>{movie.ticketprice}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
              <p className="text-center">Total Amount Payed = Rs {finalSum}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div>
          <div className="mb-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-success bi bi-check-circle-fill"
              width="75"
              height="75"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <div className="text-center">
            <h1>Thank You !</h1>
            <p>Enjoy Watching</p>
            <p>Visit our portal again !!! </p>
            <button className="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#exampleModal" onClick={(e)=>{getSummary(e)}}>Payment Summary</button>
          </div>
        </div>
      </div>
    </>
  );
}
