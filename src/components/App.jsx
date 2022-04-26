import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import HomePage from './homePage/HomePage';
import MoviesPage from './moviesPage/MoviesPage';
import MovieDetailsPage from './movieDetailsPage/MovieDetailsPage';


const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}/>
      </Routes>
    </>
  );
};


export default App;
