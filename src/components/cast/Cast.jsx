import React, { useState, useEffect } from 'react';

import { filmCast } from 'api/movieSearcher';
import defaultPicture from 'api/defaultPucture';
import styles from "./Cast.module.css";



const Cast = ({ id }) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!id) {
            return
        };

        filmCast(id).then(response => setCast(response.data.cast)).catch(error => console.log(error));
    }, [id]);


    return (
        <div>
            <ul className={styles.cast__list}>
                {cast.map(({ id, name, profile_path, character }) => {
                    return <li key={id} className={styles.character}>
                        <img className={styles.image} src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}`
                            : defaultPicture} alt={id} />
                        <div className={styles.description}>
                            <h3 className={styles.name}>{name}</h3>
                            <p className={styles.role}>Character: {character}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Cast;