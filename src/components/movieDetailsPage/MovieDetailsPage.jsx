import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";

import { filmDescription } from 'api/movieSearcher';
import defaultPicture from 'api/defaultPucture';
import styles from "./MovieDetailsPage.module.css";
import homePageStyles from "../homePage/HomePage.module.css";

const MovieDetailsPage = ({ handler }) => {
    const [description, setDescription] = useState([]);
    //const [error, setError] = useState("");
    const id = useParams().movieId;
    const navigate = useNavigate();

    useEffect(() => {
        handler(id);
        filmDescription(id).then(response => setDescription(response.data))
            .catch(error => console.log(error));
    }, [id, handler]);


    const buttonHandler = () => {
        navigate(-1);
    };


    return (
        <>
        <div className={styles.container}>
            <div className={styles.container__buttom}>
                <button className={styles.button} type='button' onClick={buttonHandler}>Go back</button> 
            </div>
            <div className={styles.container__description}>
                    <img src={description.poster_path ? `https://image.tmdb.org/t/p/w500${description.poster_path}`
                            : defaultPicture}
                    alt={description.title} className={styles.image} />
                
                <div className={styles.description}>
                    <h1 className={styles.title}>{description.title}</h1>
                    <p className={styles.text}>User score: {description.vote_average}</p>
                    <h2 className={styles.subtitle}>Overview</h2>
                    <p className={styles.text}>{description.overview}</p>
                    <h2 className={styles.subtitle}>Genres</h2>
                    <p className={styles.text}>{description.genres && description.genres.map(({name}) => name + " ")}</p>
                </div> 
            </div>

            <div>
                <h2 className={styles.subtitle}>Additional information:</h2>
                <ul className={homePageStyles.trends}>
                    <li className={homePageStyles.movie__item}>
                        <NavLink className={homePageStyles.movie__link} to="cast">Cast</NavLink>
                    </li>
                    <li className={homePageStyles.movie__item}>
                        <NavLink className={homePageStyles.movie__link} to="reviews">Review</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.container__links}>
            <Outlet />
        </div> 
        </>    
    )
};

export default MovieDetailsPage;