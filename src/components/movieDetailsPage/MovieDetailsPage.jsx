import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import { filmDescription, filmCast, filmReview } from 'api/movieSearcher';
import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';

const MovieDetailsPage = () => {
    //const [id, setId] = useState(useParams().movieId);
    const [description, setDescription] = useState([]);
    const [cast, setCast] = useState([]);
    const [review, setReview] = useState([]);

    const id = useParams().movieId;

    useEffect(() => {
        console.log(id);

        filmDescription(id).then(response => setDescription(response.data)).catch(error => console.log(error));

        filmCast(id).then(response => setCast(response.data.cast)).catch(error => console.log(error));

        filmReview(id).then(response => setReview(response.data.results)).catch(error => console.log(error));
    }, [id]);


    return (
        <div>
            <div>
                <img src={description.poster_path} alt={description.title} />
                <div>
                    <h1>{description.title}</h1>
                    <p>User score: {description.vote_average}</p>
                    <h2>Overview</h2>
                    <p>{description.overview}</p>
                    <h2>Genres</h2>
                    <p>{description.genres && description.genres.map(({name}) => name + " ")}</p>
                </div> 
                <div>
                    <h3>Additional information:</h3>
                    <ul>
                        <li>
                            <Link to="/">Cast</Link>
                        </li>
                        <li>
                            <Link to="/">Review</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Cast cast={cast}/>
            <Reviews review={review}/>
        </div>
    )
};

export default MovieDetailsPage;