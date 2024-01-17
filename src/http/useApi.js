import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getUpcomingMovies, getMovieDetails } from './apiService';

const useApi = () => {
  const dispatch = useDispatch();
  const { popular, topRated, nowPlaying, upcoming, selectedMovie, error, status = '' } = useSelector((state) => state.movies);

  const fetchPopularMovies = () => {
    dispatch(getPopularMovies());
  };

  const fetchTopRatedMovies = () => {
    dispatch(getTopRatedMovies());
  };
  const fetchNowPlayingMovies = () => {
    dispatch(getNowPlayingMovies());
  };
  const fetchUpcomingMovies = () => {
    dispatch(getUpcomingMovies());
  };
  const fetchMovieDetails = (movieId) => {
    dispatch(getMovieDetails(movieId));
  };

  return {
    popular,
    status,
    nowPlaying,
    topRated,
    upcoming,
    selectedMovie,
    error,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchUpcomingMovies,
    fetchMovieDetails
  };
};
export default useApi