import './carousel.css'
import { useState } from 'react';
import {TMDB_IMAGES_BASE_URL} from '../../../constants'
import { Link } from 'react-router-dom';
 

const Carousel = ({ movieData }) => {

    const [currentMovie, setCurrentMovie] = useState(0);

    const next = () => {
        setCurrentMovie((prevMovie) => (prevMovie + 1) % movieData.length);
    };

    const prev = () => {
        setCurrentMovie((prevMovie) => (prevMovie - 1 + movieData.length) % movieData.length);
    };

    if (movieData) {
        movieData = movieData.slice(0, 5)
    }

    return (
        movieData ?
            <div className="image-container">
                  <Link to={`/details/${movieData[currentMovie].id}`}>
                <div className="contents">
                    <h2 className='title'>{movieData[currentMovie].title}</h2>
                    <h3>{movieData[currentMovie]?.release_date ? new Date(movieData[currentMovie].release_date).getFullYear() : null}&nbsp;.&nbsp;{(movieData[currentMovie].original_language).toUpperCase()}&nbsp;.&nbsp;<span className='pga-rating'>{movieData[currentMovie].adult ? "A" : "U"} </span></h3>
                    <p className='overview'>{movieData[currentMovie].overview}</p>
                </div>
                <div className='carousel-image'>
                    <img className="image" src={`${TMDB_IMAGES_BASE_URL}${movieData[currentMovie].backdrop_path}`} />
                </div>
                </Link>
                <button className="prev" onClick={prev}>&#10094;</button>
                <button className="next" onClick={next}>&#10095;</button>
            </div>


            : null



    )
}

export default Carousel