import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../API'

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

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
                return <li key={movie.id}><NavLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</NavLink ></li>
            })}</ul></>
    )
}
export default Home;
