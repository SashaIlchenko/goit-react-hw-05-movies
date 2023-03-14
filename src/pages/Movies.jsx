import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { getSearchMovies } from '../API'
import { SearchBox } from "../components/SearchBox";

export const Movies = () => {
    // const [movieName, setMovieName] = useState('');
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("query") ?? "";

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getMovies() {
            if (!movieName) return;
            try {
                const movies = await getSearchMovies(movieName, 1);
                setMovies([...movies.results]);
            } catch (error) {
                console.log(error)
            }
        }
        getMovies();
    }, [movieName, movies])
    const onSubmit = (movieName) => {
        const nextParams = movieName !== "" ? { query: movieName } : {};
        setSearchParams(nextParams);
    }

    return (<><SearchBox onSubmit={onSubmit} />
        <ul>{movies.map(movie => {
            return <li key={movie.id}><NavLink to={`${movie.id}`} state={{ from: location }}>{movie.title}</NavLink></li>
        })}</ul>
    </>)
}