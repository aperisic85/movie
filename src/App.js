import React from "react";
import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//a177f867

const API_URL='http://www.omdbapi.com?apikey=a177f867';


const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
  }

const App = () => {
   
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
   
    useEffect(()=>{
        searchMovies('Spiderman');
   }, []);

   return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input 
                placeholder="Search for movies"
                value = "Superman"
                onChange={() => {}}
            ></input>
            <img 
                src={SearchIcon}
                alt="search"
                onClick={() => {}}>

            </img>
        </div>
        <MovieCard movie1 = {movie1} />
    </div>
    );
}

export default App;