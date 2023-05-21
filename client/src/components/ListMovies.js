import React, { Component } from 'react'
import MovieService from '../services/MovieService'
import NavbarUser from './NavbarUser';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ListMovies extends Component {
    
  constructor(props){
    super(props)
    this.state={
        movies:[],
    }
  }
  componentDidMount(){
    MovieService.getMovies().then((res)=> {
      this.setState({movies: res.data});
    });
  }

   getMovieDetails = (e) => {
    e.preventDefault();

    var name=(e.target.parentElement.parentElement.firstChild.innerText);
    var allMovies=this.state.movies;
    allMovies.map((movie)=>{
      if(movie.name===name){
        axios.post("http://localhost:8080/api/v1/cart/addtoCart", movie).then(()=>{alert("Movie Added to Cart")}).catch(()=>{alert("Movie could not be added to cart")});
      }
    })
    

  };

   addToCart = async () => {
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
      .post(`http://localhost:8080/api/v1/movies/${movieToEdit}`, movieData)
      .then((response) => {
        setStateUpdate(stateUpdate + 1);
        alert("Moive updated successfully");
      })
      .catch((error) => {
        alert("Error occured while updating");
      });
  };

  render() {
    return (
      <>
      <NavbarUser/>
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
            {
              this.state.movies.map(
                movie=>
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.description}</td>
                  <td>{movie.language}</td>
                  <td>{movie.genere}</td>
                  <td>{movie.date_time}</td>
                  <td>{movie.ticketprice}</td>
                  <td><button type="submit" className="btn btn-dark"  onClick={(e) => this.getMovieDetails(e)}>Add to Cart</button></td>
                </tr>
              )
            }
          </tbody>
          </table>
        </div>
      </div>
      </>
    )
  }
}

