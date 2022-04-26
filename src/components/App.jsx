import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import HomePage from './homePage/HomePage';
import MoviesPage from './moviesPage/MoviesPage';
import MovieDetailsPage from './movieDetailsPage/MovieDetailsPage';

import { searchedFilms } from 'api/movieSearcher';


const App = () => {
  const [request, setRequest] = useState("");
  const [searchFilm, setSearchFilm] = useState([]);

  useEffect(() => {
        if (!request) {
            return
        }
        //console.log(request)

        searchedFilms(request).then(response => {
            const found = response.data.results.map(({ title, id }) => {
                return { title: title, id: id }
            })
            setSearchFilm([...found]);
        }).catch(error => console.log(error));
    }, [request]);

  const requestHandler = (request) => {
    setRequest(request)
  };


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage submit={requestHandler} films={searchFilm}/>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}/>
      </Routes>
    </>
  );
};


export default App;
