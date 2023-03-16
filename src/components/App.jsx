import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./SharedLayout";
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));



// import MovieDetails from "pages/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>


  );
};
