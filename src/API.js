import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e8d94f3e976148bda0a5c640d4df112b';

export async function getTrendingMovies(page = 1) {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}&media_type=movie`)

    return response.data;

}

export function getSearchMovies(name, page) {
    const response = axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&page=${page}&query=${name}language=en-US&page=1&include_adult=false`)
    if (response.data.ok) {
        return response.data;
    }
    return Promise.reject(new Error('Ops!Smt wrong!'));
}

export function getMovieDeteils(id) {
    const response = axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    if (response.ok) {
        return response.data;
    }
    return Promise.reject(new Error('Ops!Smt wrong!'));
}
export function getMovieCredits(id) {
    const response = axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    if (response.ok) {
        return response.data;
    }
    return Promise.reject(new Error('Ops!Smt wrong!'));
}

export function getMovieReviews(id) {
    const response = axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    if (response.ok) {
        return response.data;
    }
    return Promise.reject(new Error('Ops!Smt wrong!'));
}