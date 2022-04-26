import React, { useState, useEffect } from 'react';
import { Link, useMatch} from "react-router-dom";
import { searchedFilms } from 'api/movieSearcher';
//import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [value, setValue] = useState("");
    const [request, setRequest] = useState("");
    const [searchFilm, setSearchFilm] = useState([]);

   // const match = useMatch("/movies").pattern.path
   // console.log(match)


    useEffect(() => {
        if (!request) {
            return
        }
        //console.log(request)

        searchedFilms(request).then(response => {
            const found = response.data.results.map(({ title, id }) => {
                return { title: title, id: id }
            })
            setSearchFilm([...found]);
        }).catch(error => console.log(error));
    }, [request]);


    const inputHandler = e => {
        const { value } = e.currentTarget;
        setValue(value);
    };


    const submitHandler = (e) => {
        e.preventDefault();
        setRequest(value);
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
                {searchFilm.length > 0 && (
                    searchFilm.map(({ id, title }) => {
                        return <li key={id}>
                            <Link to={`/movies/${id}`} >{title}</Link>
                        </li>
                    })
                )}
            </ul>
        </div>
    );
};

export default MoviesPage;