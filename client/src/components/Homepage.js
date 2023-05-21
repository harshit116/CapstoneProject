import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export default function Homepage() {
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate =useNavigate();

  
 
   const userLogin=async(e)=>{
      e.preventDefault();
      axios.post('http://localhost:8080/api/v1/user/signin', {
        username: userUsername,
        password: userPassword
      })
      .then(function (response) {
        if(response.data===true){
          navigate("/userdashboard");
        }
        else{
          alert("Invalid Credentials");
        }
      })
      .catch(function (error) {
        alert(error);
      });
   
    }

    const adminLogin=async(e)=>{
      e.preventDefault();
      axios.post('http://localhost:8080/api/v1/admin/signin', {
        username: adminUsername,
        password: adminPassword
      })
      .then(function (response) {
        if(response.data===true){
          navigate("/admindashboard");
        }
        else{
          alert("Invalid Credentials");
        }
      })
      .catch(function (error) {
        alert(error);
      });
   
    }


  return (
    <div className="d-flex justify-content-center ">
      <div className="  row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center  ">
        <div className="col d-flex justify-content-center ">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">User Login</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    onChange={(e) => setUserUsername(e.target.value)}
                    value={userUsername}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex gap-3">
                 
                  <button type="submit" className="btn btn-primary mt-2 " onClick={(e)=>{userLogin(e)}}>
                    SignIn
                  </button>
                 
                  <Link className="navbar-brand" to="/signupuser">
                    <button type="submit" className="btn btn-success  ">
                      SignUp
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center ">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Admin Login</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    UserName
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    id="adminUsername"
                    name="adminusername"
                    required
                    onChange={(e) => setAdminUsername(e.target.value)}
                    value={adminUsername}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="adminPassword"
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary  my-1" onClick={(e)=>{adminLogin(e)}}>
                      SignIn
                    </button>
                  
                  <Link to="/signupadmin">
                    <button type="submit" className="btn btn-success  my-1">
                      SignUp
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
