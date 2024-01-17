import './imageSlider.css'
import { useState } from 'react';
import {TMDB_IMAGES_BASE_URL} from '../../../constants'
import { Link } from 'react-router-dom';


const ImageSlider = ({ movieData, category }) => {
    const clickAction = (m) => {
      console.log("Turbo ~ clickAction ~ m:", m);
    };
  
    const [hoveredMovie, setHoveredMovie] = useState(null);
  
    const MovieDetailsBody = ({ movie }) => {
      return (
        <div className={`movie-details-container ${hoveredMovie ? 'hovered' : ''}`}>
          <img
            src={`${TMDB_IMAGES_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className='movie-details'>
            <div className='movie-details-body'>
              <h1>{movie.title}</h1>
              <h3>{movie?.release_date ? new Date(movie.release_date).getFullYear() : null}&nbsp;.&nbsp;{(movie.original_language).toUpperCase()}&nbsp;.&nbsp;<span className='pga-rating'>{movie.adult ? "A" : "U"} </span></h3>
              <p className='overview'>{movie.overview}</p>
            </div>
          </div>
        </div>
      );
    };
  
    return (
      <>
        <h2 className='category'>{category}</h2>
        <div className='card-container'>
          {movieData && (
            movieData.map((movie) => (
              <Link key={movie.id} to={`/details/${movie.id}`}>
              <div onClick={() => { clickAction(movie) }} 
                className={"card"}
                onMouseEnter={() => setHoveredMovie(movie)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={`${TMDB_IMAGES_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
                {hoveredMovie &&
                  hoveredMovie.id === movie.id &&
                  (
                    <MovieDetailsBody movie={hoveredMovie} />
                  )
                }
              </div>
              </Link>
            ))
          )}
        </div>
      </>
    );
  };
  
  export default ImageSlider;