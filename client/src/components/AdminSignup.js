import React,{useState} from "react";
import { Link } from "react-router-dom";
export default function AdminSignup() {
  const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    function saveAdmin(){
     
        let data={username,password};
        fetch("http://localhost:8080/api/v1/admin/save",{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result)
        })
    }
  return (
    <div className="container p-5">
      <h2>Admin Signup</h2>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Username
          </label>
          <input type="email" class="form-control" name="username" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" name="password" id="inputPassword4" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div class="col-12">
          <Link to="/">
            <button type="submit" class="btn btn-primary" onClick={saveAdmin}>
              SignUp
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
