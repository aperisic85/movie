import React from "react";
import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg';


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
        <div className="container">
            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>

                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster:'https://via.placeholder.com/400'} alt={movie1.title}></img>
                </div>

                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>


        </div>
    </div>
    );
}

export default App;