import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "API";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        async function getReviews() {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                console.log(error)
            }
        }
        getReviews();
    }, [movieId])
    return (!reviews.length ? "No reviews for this movie" : <ul>
        {
            reviews.map(review => {
                return <li key={review.id}>
                    <p>Author: {review.author}</p>
                    <p>{review.content}</p>
                </li>
            })
        } </ul >
    )
}

export default Reviews;