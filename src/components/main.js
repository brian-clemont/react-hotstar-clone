import './main.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Nav/Nav'
import Home from './HomeComponent/Home'
import { Provider } from 'react-redux';
import store from '../store'
import MovieDetails from './MovieDetails/MovieDetails'
import LoginPage from './Login/Login';
const Main = () => {


    return (
        <Provider store={store}>
            <Nav />
            <Routes>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="/home" Component={Home} />
                <Route path="/details/:movieId" Component={MovieDetails} />
                <Route path="/login" element={<LoginPage onLogin={() => window.location.reload()} />} />
            </Routes>
        </Provider>

    );
}

export default Main;