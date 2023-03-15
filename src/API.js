import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e8d94f3e976148bda0a5c640d4df112b';

export async function getTrendingMovies(page = 1) {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}&media_type=movie`)
    return response.data;
}

export async function getSearchMovies(name, page) {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&page=${page}&language=en-US&page=1&include_adult=false&query=${name}`)
    return response.data;
}

export async function getMovieDetails(id) {
    const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    return response.data;
}
export async function getMovieCredits(id) {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return response.data;
}

export async function getMovieReviews(id) {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    return response.data;
}