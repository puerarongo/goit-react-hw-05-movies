import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './appBar/AppBar';
import HomePage from './homePage/HomePage';
import MoviesPage from './moviesPage/MoviesPage';


const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
};


export default App;
