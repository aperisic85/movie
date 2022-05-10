import React from "react"


const MovieCard = ({movie1}) => {  //({movie1}) use this for destruct umjesto (props)
   return (
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
   );
}

export default MovieCard