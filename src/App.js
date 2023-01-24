import React, { useEffect } from "react";

//32d20b41

const API_URL = 'http://www.omdbapi.com?apikey=32d20b41'

const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
    console.log(data.Search);
    }
    useEffect(() => {
searchMovie('Spiderman')
    }, [])
    return (
        <h1>App</h1>
    )
};

export default App