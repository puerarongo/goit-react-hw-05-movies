import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trendingFilms } from "api/movieSearcher";
//import styles from "./HomePage.module.css";

const HomePage = () => {
    const [film, setFilm] = useState([]);


    useEffect(() => {
        trendingFilms().then(response => {
            const trends = response.data.results.map(({ title, id }) => {
                return {title: title, id: id}
            })
            setFilm([...trends])
        }).catch(error => console.log(error))
    }, [])
    

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {film.length > 0 && (
                    film.map(({ id, title }) => {
                        return <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>})
                    )
                }
            </ul>
        </>
    );
};

export default HomePage;