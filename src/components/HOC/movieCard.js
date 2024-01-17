
import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';

const movieCardHOC = (WrappedComponent, fetchData, category) => {
  return () => {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          setMovieData(fetchData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchDataAsync();
    }, []);

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return <WrappedComponent movieData={movieData} category={category} />;
  };
};

export default movieCardHOC;
