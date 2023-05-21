import axios from 'axios';

const MOVIE_API_BASE_URL="http://localhost:8080/api/v1/movies/listAll";
const MOVIE_HORROR_BASE_URL="http://localhost:8080/api/v1/movies/listHorror"
const MOVIE_CRIME_BASE_URL="http://localhost:8080/api/v1/movies/listCrime"
const MOVIE_ROMANTIC_BASE_URL="http://localhost:8080/api/v1/movies/listRomantic"
const MOVIE_COMEDY_BASE_URL="http://localhost:8080/api/v1/movies/listComedy"
const MOVIE_SEARCHED="http://localhost:8080/api/v1/movies/{name}";
const MOVIE_CART="http://localhost:8080/api/v1/cart/listAll"
class MovieService{

    getMovies(){
        return axios.get(MOVIE_API_BASE_URL);
    }
    getHorror(){
        return axios.get(MOVIE_HORROR_BASE_URL);
    }
    getCrime(){
        return axios.get(MOVIE_CRIME_BASE_URL);
    }
    getRomantic(){
        return axios.get(MOVIE_ROMANTIC_BASE_URL);
    }
    getComedy(){
        return axios.get(MOVIE_COMEDY_BASE_URL);
    }
    getSearch(){
        return axios.get(MOVIE_SEARCHED);
    }
    getCartMovies(){
        return axios.get(MOVIE_CART);
    }
}

export default new MovieService()