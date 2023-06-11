import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('query') ?? "";
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.query.value.toLowerCase() });
        form.reset();
    };

    useEffect(() => {
        if (query === "") return;

        const options = {
            method: 'GET',
            headers: { accept: 'application/json' },
        };
        const API_KEY = '619e0771d50f6f0cacad940951db2b61';
        const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}&query=${query}`;

        fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(({ results }) => {
                setMovies(results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [query]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" placeholder="Search movies" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map((item) => (
                    <li key={item.id}>
                        <Link to={`${item.id}`} state={{ from: location }}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Movies;
