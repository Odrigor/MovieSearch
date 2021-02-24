import PropTypes from 'prop-types'
import React from 'react';
import Movie from './Movie'

function MovieList(props) 
{
    const {movies} = props;
    return (
        <div className="MoviesList">
            {movies.results.map
            (movie =>
            {
                return <Movie 
                key={movie.imdbID} 
                title={movie.Title} 
                year={movie.year} 
                poster={movie.Poster}
                className="MoviesList-item">
                {movie.Title} 
                </Movie>
            })}
        </div>
    );
}


MovieList.propTypes = {
    movies: PropTypes.array,
}
export default MovieList;