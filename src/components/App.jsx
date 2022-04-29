import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { searchedFilms, filmCast, filmReview } from 'api/movieSearcher';
//import Navigation from './navigation/Navigation';
import Layout from './layout/Layout';
import Loader from './loader/Loader';

//import HomePage from './homePage/HomePage';
//import MoviesPage from './moviesPage/MoviesPage';
//import MovieDetailsPage from './movieDetailsPage/MovieDetailsPage';
//import NotFound from './notFound/NotFound';
//import Cast from 'components/cast/Cast';
//import Reviews from 'components/reviews/Reviews';

Notify.init({
  timeout: 3000,
  warning: {
    background: 'rgb(255, 124, 16)',
    textColor: 'rgb(0, 0, 0)',
    notiflixIconColor: 'rgba(0,0,0)'
  }
});

const HomePage = lazy(() => import('./homePage/HomePage'));
const MoviesPage = lazy(() => import('./moviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./movieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));
const NotFound = lazy(() => import('./notFound/NotFound'));

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
      if (response.data.results.length === 0) {
        return Notify.warning("The title of this movie does not exist!");
      }
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

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage submit={requestHandler} films={searchFilm} />} />

            <Route path="movies/:movieId" element={<MovieDetailsPage handler={idHandler} />}>
              <Route path="cast" element={<Cast cast={cast} />} />
              <Route path="reviews" element={<Reviews review={review} />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};


export default App;
