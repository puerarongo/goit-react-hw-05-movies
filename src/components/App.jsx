import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import HomePage from './homePage/HomePage';
import MoviesPage from './moviesPage/MoviesPage';
import MovieDetailsPage from './movieDetailsPage/MovieDetailsPage';
import NotFound from './notFound/NotFound';
import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';
import { searchedFilms, filmCast, filmReview } from 'api/movieSearcher';


const App = () => {
  const [request, setRequest] = useState("");
  const [searchFilm, setSearchFilm] = useState([]);
  const [id, setId] = useState(0);
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    if (!request) {
      return
    }

    searchedFilms(request).then(response => {
      const found = response.data.results.map(({ title, id }) => {
        return { title: title, id: id }
      })
      setSearchFilm([...found]);
      }).catch(error => console.log(error));
  }, [request]);
  
  useEffect(() => {
    if (!id) {
      return
    }

    filmCast(id).then(response => setCast(response.data.cast)).catch(error => console.log(error));

    filmReview(id).then(response => setReview(response.data.results)).catch(error => console.log(error));
  }, [id]);


  const requestHandler = (request) => {
    setRequest(request)
  };

  const idHandler = (id) => {
    setId(id)
  };

  //<Routes>
  //              <Route path={`/movies/:movieId/cast`} element={<Cast cast={cast} />} />
  //              <Route path="/movies/:movieId/reviews" element={<Reviews review={review} />} />
  //          </Routes>


  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage submit={requestHandler} films={searchFilm} />} />
        
        <Route path="movies/:movieId" element={<MovieDetailsPage handler={idHandler}/>}>
          <Route path="cast" element={<Cast cast={cast} />} />
          <Route path="reviews" element={<Reviews review={review} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};


export default App;
