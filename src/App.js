import React from "react";
import { useEffect } from "react";


//a177f867

const API_URL='http://www.omdbapi.com?apikey=a177f867';

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
       <h1>Hi there</h1>
   );
}

export default App;