import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";

import { filmDescription } from 'api/movieSearcher';

const MovieDetailsPage = ({ handler }) => {
    const [description, setDescription] = useState([]);
    const id = useParams().movieId;
    const navigate = useNavigate();

    useEffect(() => {
        handler(id);
        filmDescription(id).then(response => setDescription(response.data)).catch(error => console.log(error));
    }, [id, handler]);


    const buttonHandler = () => {
        navigate(-1);
    };


    return (
        <div>
            <div>
                <button type='button' onClick={buttonHandler}>Go back</button> 
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${description.poster_path}`}
                    alt={description.title} />
                <div>
                    <h1>{description.title}</h1>
                    <p>User score: {description.vote_average}</p>
                    <h2>Overview</h2>
                    <p>{description.overview}</p>
                    <h2>Genres</h2>
                    <p>{description.genres && description.genres.map(({name}) => name + " ")}</p>
                </div> 
            </div>
            <div>
                <h3>Additional information:</h3>
                <ul>
                    <li>
                        <NavLink to="cast">Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews">Review</NavLink>
                    </li>
                </ul>
            </div>
            <hr />
            <div>
                <Outlet />
            </div>   
        </div>
    )
};

export default MovieDetailsPage;