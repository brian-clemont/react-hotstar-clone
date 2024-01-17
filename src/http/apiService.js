import http from './http.common'
import { createAsyncThunk } from '@reduxjs/toolkit';
import {REACT_APP_TMDB_API_KEY} from '../constants'


const getPopularMovies = createAsyncThunk('getPopularMovies', async () => {
  try {
    const response = await http.get(`/movie/popular?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
});

const getTopRatedMovies = createAsyncThunk('getTopRatedMovies', async () => {
  try {
    const response = await http.get(`/movie/top_rated?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
});
const getUpcomingMovies = createAsyncThunk('getUpcomingMovies', async () => {
  try {
    const response = await http.get(`/movie/upcoming?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
});
const getNowPlayingMovies = createAsyncThunk('getNowPlayingMovies', async () => {
  try {
    const response = await http.get(`/movie/now_playing?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
});
const getMovieDetails = createAsyncThunk('getMovieDetails', async (movieId) => {
  try {
    const response = await http.get(`/movie/${movieId}?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies, getMovieDetails };

