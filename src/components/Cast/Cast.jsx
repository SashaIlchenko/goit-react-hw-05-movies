import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCredits } from '../../API';
import defaultImgProfile from './defaultImgProfile.jpg'

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        async function getCast() {
            const data = await getMovieCredits(movieId);
            setCast(data.cast);
        }
        getCast();
    }, [movieId]);

    return (
        <><ul>{cast.map(el => {
            return <li key={el.cast_id}>
                <img src={!el.profile_path ? defaultImgProfile : `https://image.tmdb.org/t/p/w200/${el.profile_path}`} alt={el.name} />
                <p>{el.name}</p>
                <p>Character: {el.character} </p>
            </li>
        })}</ul></>
    )
}

export default Cast;