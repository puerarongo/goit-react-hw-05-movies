import React from "react";
import styles from "./Description.module.css";

const Description = ({title, score, overview, genres }) => {
    return (
        <div className={styles.description}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>User score: {score}</p>
            <h2 className={styles.subtitle}>Overview</h2>
            <p className={styles.text}>{overview}</p>
            <h2 className={styles.subtitle}>Genres</h2>
            <p className={styles.text}>{genres && genres.map(({ name }) => name + " ")}</p>
        </div>
    )
};

export default Description;