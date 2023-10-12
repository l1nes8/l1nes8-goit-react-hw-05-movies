import React, { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Movies = lazy(() => import('./movies'));
const MovieDetails = lazy(() => import('./movieDetails'));
const Cast = lazy(() => import('./cast'));
const Reviews = lazy(() => import('./reviews'));

export function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}
