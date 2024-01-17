import { createSlice } from '@reduxjs/toolkit';
import { MOVIES_LOADED_SUCCESS, MOVIES_LOADING, MOVIES_LOADING_FAILURE } from './constants'
import  {getPopularMovies, getTopRatedMovies,getNowPlayingMovies, getUpcomingMovies, getMovieDetails} from './http/apiService'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
    popular: null,
    topRated: null,
    upcoming: null,
    nowPlaying: null,
    selectedMovie: null,
    status: 'idle',
    error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getPopularMovies.pending, (state) => {
          state.status = MOVIES_LOADING;
        })
        .addCase(getPopularMovies.fulfilled, (state, action) => {
          state.status = MOVIES_LOADED_SUCCESS;
          state.popular = action.payload;
        })
        .addCase(getPopularMovies.rejected, (state, action) => {
          state.status = MOVIES_LOADING_FAILURE;
          state.error = action.error.message;
        })
        // for Top Rated
        .addCase(getTopRatedMovies.pending, (state) => {
          state.status = MOVIES_LOADING;
        })
        .addCase(getTopRatedMovies.fulfilled, (state, action) => {
          state.status = MOVIES_LOADED_SUCCESS;
          state.topRated = action.payload;
        })
        .addCase(getTopRatedMovies.rejected, (state, action) => {
          state.status = MOVIES_LOADING_FAILURE;
          state.error = action.error.message;
        })
        // for upcoming
        .addCase(getUpcomingMovies.pending, (state) => {
          state.status = MOVIES_LOADING;
        })
        .addCase(getUpcomingMovies.fulfilled, (state, action) => {
          state.status = MOVIES_LOADED_SUCCESS;
          state.upcoming = action.payload;
        })
        .addCase(getUpcomingMovies.rejected, (state, action) => {
          state.status = MOVIES_LOADING_FAILURE;
          state.error = action.error.message;
        })
        // for now playing
        .addCase(getNowPlayingMovies.pending, (state) => {
          state.status = MOVIES_LOADING;
        })
        .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
          state.status = MOVIES_LOADED_SUCCESS;
          state.nowPlaying = action.payload;
        })
        .addCase(getNowPlayingMovies.rejected, (state, action) => {
          state.status = MOVIES_LOADING_FAILURE;
          state.error = action.error.message;
        })
        //  For movie details
        .addCase(getMovieDetails.pending, (state) => {
          state.status = MOVIES_LOADING;
        })
        .addCase(getMovieDetails.fulfilled, (state, action) => {
          state.status = MOVIES_LOADED_SUCCESS;
          state.selectedMovie = action.payload;
        })
        .addCase(getMovieDetails.rejected, (state, action) => {
          state.status = MOVIES_LOADING_FAILURE;
          state.error = action.error.message;
        })
        
  
      
    },
  });

  export default moviesSlice.reducer;
