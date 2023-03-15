import { useEffect, useState } from "react";
import { Outlet, useParams, useLocation, NavLink } from "react-router-dom";
import { getMovieDetails } from "API";
import defaultImg from '../pages/defaultImg.jpg'

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        async function getDetails() {
            try {
                const details = await getMovieDetails(movieId);
                setMovie(details);
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [movieId]);
    return (<><NavLink to={backLinkHref} >Go back</NavLink>
        <div><img src={!movie.poster_path ? defaultImg : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title} /><h1>{movie.title}({!movie.release_date ? 'Coming soon...' : movie.release_date.slice(0, 4)})</h1>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h2>Overview</h2><p>{movie.overview}</p>
            <h3>Genres</h3><p>{!movie.genres ? "No genres" : movie.genres.map(genre => genre.name).join(', ')}</p>
        </div><div><p>Aditional information</p><ul><li><NavLink to="cast" >Cast</NavLink ></li><li><NavLink to="reviews">Reviews</NavLink></li></ul><Outlet /></div></>)
}
export default MovieDetails;

