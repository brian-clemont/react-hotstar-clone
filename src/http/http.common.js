import axios from "axios";
import {REACT_APP_TMDB_TOKEN} from '../constants'
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${REACT_APP_TMDB_TOKEN}`
  }
});