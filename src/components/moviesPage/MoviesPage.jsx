import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import styles from "./MoviesPage.module.css";

const MoviesPage = ({submit, films}) => {
    const [value, setValue] = useState("");

    // const match = useMatch("/movies").pattern.path
    // console.log(match)

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
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    Enter the name of the movie in the search bar:
                    <input type="text" value={value} onChange={inputHandler}></input>
                </label>
                <button type="submit">Search</button>
            </form>
            <ul>
                {films.length > 0 && (
                    films.map(({ id, title }) => {
                        return <li key={id}>
                            <Link to={`${id}`} >{title}</Link>
                        </li>
                    })
                )}
            </ul>
        </div>
    );
};

export default MoviesPage;