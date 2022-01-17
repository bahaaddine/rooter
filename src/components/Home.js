import React from 'react'
import MovieList from './MovieList'
function Home({movieList,search}) {
    return (
        <div>
            <MovieList movieList={movieList} search={search}/>
        </div>
    )
}

export default Home
