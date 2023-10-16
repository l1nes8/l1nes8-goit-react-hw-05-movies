import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';
import css from 'style.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDRmZTdlM2QwYTY5MzA2MzQ4ZTUxN2YyMWM3MGE3OSIsInN1YiI6IjY1Mjk3NjQzMGNiMzM1MTZmNWM4YjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whmYYKhT_uILl9fMGb9Rclq5CcbbJVNJVKSFUVsEDto',
      },
    };

    axios
      .request(options)
      .then(response => {
        setMovieDetails(response.data);
        console.log(response.data);
      })
      .catch(error => {
        setError(error.message);
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>More information about the movie</h2>
      {movieDetails && (
        <div className={css.description}>
          <img
            className={css.imgMovies}
            src={`${BASE_IMG_URL}/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className={css.descriptionText}>
            <h3>{movieDetails.title}</h3>
            <p className={css.textMovies}>{movieDetails.overview}</p>
            <h5>
              Popularity: <span>{movieDetails.popularity}</span>
            </h5>
            <h4>Genres</h4>
            <ul>
              {movieDetails.genres.map(genre => (
                <li key={genre.id} className={css.itemMovieDetails}>
                  {genre.name}
                </li>
              ))}
            </ul>
            <h3>Additional information</h3>
            <ul>
              <li className={css.itemMovieDetails}>
                <Link to={`/movies/${movieDetails.id}/cast`}>Cast</Link>
              </li>
              <li className={css.itemMovieDetails}>
                <Link to={`/movies/${movieDetails.id}/reviews`}>Reviews</Link>
              </li>
              <Outlet />
            </ul>
          </div>
        </div>
      )}
      {error && (
        <p className={css.error}>Виникала якась проблема з вашим запитом</p>
      )}
    </div>
  );
};

export default MovieDetails;
