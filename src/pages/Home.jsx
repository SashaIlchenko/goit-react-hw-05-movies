import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { getTrendingMovies } from '../API'

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            try {
                const movies = await getTrendingMovies();
                setMovies([...movies.results]);
            }
            catch (err) {
                console.log(err)
            }
        }
        getMovies();
    }, [])
    return (
        <><h1>Trending today</h1>
            <ul>{movies.map(movie => {
                return <li key={movie.id}><NavLink to={`${movie.id}`}>{movie.title}</NavLink ></li>
            })}</ul></>
    )
}
export default Home;

/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    alt={movie.title} /> */