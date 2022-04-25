import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './appBar/AppBar';
import HomePage from './homePage/HomePage';
import MoviesPage from './moviesPage/MoviesPage';


const App = () => {
  return (
    <>
      <AppBar />
      <HomePage />
      <MoviesPage />
    </>
  );
};


export default App;
