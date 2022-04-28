import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./MoviesPage.module.css";
import homePageStyles from "../homePage/HomePage.module.css";

const MoviesPage = ({submit, films}) => {
    const [value, setValue] = useState("");

    const inputHandler = e => {
        const { value } = e.currentTarget;
        setValue(value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        submit(value);
        setValue("");
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} cnSubmit={submitHandler}>
                <label>
                    <input className={styles.form__input} placeholder="Enter movie name..."
                        type="text" value={value} onChange={inputHandler}></input>
                </label>
                <button className={styles.form__button} type="submit">Search</button>
            </form>
            <ul className={homePageStyles.trends}>
                {films.length > 0 && (
                    films.map(({ id, title }) => {
                        return <li key={id} className={homePageStyles.movie__item}>
                            <Link to={`${id}`} className={homePageStyles.movie__link} >{title}</Link>
                        </li>
                    })
                )}
            </ul>
        </div>
    );
};

export default MoviesPage;