import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from "react-router-dom";

import styles from "./MovieDetailsPage.module.css";
import Button from './button/Button';
import Description from './description/Description';
import AdditionalLinks from './additionalLinks/AdditionalLinks';
import NotFound from 'components/notFound/NotFound';
import defaultPicture from 'api/defaultPucture';
import Modal from 'components/modal/Modal';
import { filmDescription } from 'api/movieSearcher';



const MovieDetailsPage = () => {
    const [description, setDescription] = useState([]);
    const [error, setError] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [modalValue, setModalValue] = useState("");

    const navigate = useNavigate();
    const id = useParams().movieId;


    useEffect(() => {
        filmDescription(id).then(response => {
            if (response.status === 404) {
                throw new Error("This movie is not in the database")
            }
            setDescription(response.data)
        })
            .catch(error => setError(error));
    }, [id]);


    const buttonHandler = () => {
        navigate(-1);
    };

    const modalHandler = img => {
        setModalValue(img);
        modalSwitch();
    }

    const modalSwitch = () => {
        console.log("!")
        setModalShow(!modalShow);
    }


    return (
        <>
            {modalShow && <Modal image={modalValue} switch={modalSwitch} /> }
            {!error ? (
            <>    
                <div className={styles.container}>
                    <Button handler={buttonHandler} />
                    <div className={styles.container__description}>
                            <img src={description.poster_path ? `https://image.tmdb.org/t/p/w500${description.poster_path}`
                                : defaultPicture} alt={description.title} className={styles.image}
                                onClick={() => modalHandler(description.poster_path) } />
                    
                        <Description title={description.title} score={description.vote_average}
                        overview={description.overview} genres={description.genres} />
                    </div>
                        <AdditionalLinks />
                    </div>
                    <div className={styles.container__links}>
                        <Outlet />
                    </div>
            </>    
            ) : (
            <NotFound />
        )}    
        </>
    )
};

export default MovieDetailsPage;