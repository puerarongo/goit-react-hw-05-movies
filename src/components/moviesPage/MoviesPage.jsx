import React, {useState} from 'react';
//import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [value, setValue] = useState("");

    const inputHandler = e => {
        const { value } = e.currentTarget;
        setValue(value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value)
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
        </div>
    );
};

export default MoviesPage;