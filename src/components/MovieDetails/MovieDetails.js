import { useParams } from 'react-router-dom';
import useApi from '../../http/useApi';
import Loader from '../Loader/Loader'
import { MOVIES_LOADING, MOVIES_LOADING_FAILURE, MOVIES_LOADED_SUCCESS, TMDB_IMAGES_BASE_URL } from '../../constants'
import { useEffect } from 'react'
import './movieDetails.css'
const MovieDetails = () => {

    const { movieId } = useParams();
    const { status, selectedMovie, error, fetchMovieDetails } = useApi();
    console.log("Turbo ~ MovieDetails ~ status:", status);
    let detailsTemplate = null
    let genres = []
    

    useEffect(() => {
        fetchMovieDetails(movieId);
    }, [movieId]);

    const errorDiv = <div>Error: {error}</div>

    if (selectedMovie && selectedMovie?.genres) {
        genres = selectedMovie.genres

    }

    if (status === MOVIES_LOADED_SUCCESS && selectedMovie) {
        detailsTemplate = <>
            <img src={`${TMDB_IMAGES_BASE_URL}${selectedMovie.backdrop_path}`} alt={selectedMovie.title} />
            <div className="bottom-left">
                <div className='movie-details-body'>
                    <h1 className='title'>{selectedMovie.title}</h1>
                    <h3>{selectedMovie?.release_date ? new Date(selectedMovie.release_date).getFullYear() : null}&nbsp;.&nbsp;{(selectedMovie.original_language).toUpperCase()}&nbsp;.&nbsp;<span className='pga-rating'>{selectedMovie.adult ? "A" : "U"} </span></h3>
                    <p className='overview'>{selectedMovie.overview}</p>
                    <h2>{genres ? genres.map((g,i) => {
                        return (<span key={g.id}>{g.name}<span className={i===genres.length-1 ?'separator':null}> | </span></span>)
                    }) : null

                    }

                    </h2>
                </div>
            </div>

        </>

    }

    const errorCheck = status === MOVIES_LOADING_FAILURE ? errorDiv : detailsTemplate

    return (
        <div className={status === MOVIES_LOADING ? 'home-conatiner' : 'container'}>
            {status === MOVIES_LOADING ? <Loader /> : errorCheck}
        </div>
    )

}
export default MovieDetails