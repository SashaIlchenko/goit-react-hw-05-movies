import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDeteils } from "API";
import defaultImg from '../pages/defaultImg.jpg'

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function getDetails() {
            try {
                const details = await getMovieDeteils(movieId);
                setMovie(details);
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [movieId])
    return (<><button type="button">Go back</button>
        {movie.length} && <div><img src={!movie.poster_path ? defaultImg : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title} /><h1>{movie.title}({!movie.release_date ? 'Coming soon...' : movie.release_date.slice(0, 4)})</h1>
            <p>User score: {movie.popularity * 100}%</p>
            <h2>Overview</h2><p>{movie.overview}</p>
            <h3>Genres</h3><p>{!movie.genres ? "No genres" : movie.genres.map(genre => genre.name).join(', ')}</p>
        </div></>)
}
export default MovieDetails;

