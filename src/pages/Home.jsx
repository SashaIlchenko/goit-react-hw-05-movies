import { useState, useEffect } from 'react'
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
        <ul>{movies.map(movie => {
            return <li key={movie.id}><p>{movie.title}</p></li>
        })}</ul>
    )
}
export default Home;

/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    alt={movie.title} /> */