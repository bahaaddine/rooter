import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movieList,search} ) {
    return (
        <div className="moviecard">
          {
            movieList.map((el,key) => <MovieCard search={search} key={el.id} movie={el} />)
          } 
        </div>
    )
}

export default MovieList
