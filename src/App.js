import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=32d20b41';

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovie('Batman')
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(ev) => { setSearchTerm(ev.target.value) }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}
                />
            </div>

            {movies.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) =>
                            <MovieCard key={movie.imdbID} movie={movie} />)}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    )
};

export default App;