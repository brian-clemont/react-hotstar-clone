import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useApi from '../../http/useApi';
import Carousel from './CarouselComponent/Carousel';
import ImageSlider from '../HomeComponent/ImageSlider/ImageSlider'
import Loader from '../Loader/Loader'
import { MOVIES_LOADING, MOVIES_LOADING_FAILURE } from '../../constants'
import './home.css'
import movieCardHOC from '../HOC/movieCard'


const Home = () => {


    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const { popular, status, nowPlaying, topRated, upcoming, error, fetchPopularMovies, fetchTopRatedMovies, fetchNowPlayingMovies, fetchUpcomingMovies } = useApi();

    const errorDiv = <div>Error: {error}</div>
    const HOCComp = [
        
       
        { id: 2, Component: movieCardHOC(ImageSlider, topRated, 'Top Rated') },
        { id: 3, Component: movieCardHOC(ImageSlider, upcoming, 'Upcoming') }
    ];

    if(isLoggedIn) HOCComp.splice(0,0, { id: 1, Component: movieCardHOC(ImageSlider, nowPlaying, 'Now Playing') })



    const successDiv = <>
        <Carousel movieData={popular} />
        {HOCComp.map(Hoc => {
            return <Fragment key={Hoc.id}><Hoc.Component /></Fragment>
        })}
    </>

    const errorCheck = status === MOVIES_LOADING_FAILURE ? errorDiv : successDiv

    useEffect(() => {
        fetchPopularMovies();
        fetchTopRatedMovies()
        fetchNowPlayingMovies()
        fetchUpcomingMovies()
    }, [useDispatch()]);

    return (
        <div className={status === MOVIES_LOADING ? 'home-conatiner' : ''}>
            {status && status === MOVIES_LOADING ? <Loader /> : errorCheck}
        </div>
    );
}


export default Home;