import React from 'react';
import defaultPicture from 'api/defaultPucture';
import styles from "./Cast.module.css";



const Cast = ({ cast }) => {
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