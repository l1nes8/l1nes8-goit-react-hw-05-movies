import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import css from 'style.module.css';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDRmZTdlM2QwYTY5MzA2MzQ4ZTUxN2YyMWM3MGE3OSIsInN1YiI6IjY1Mjk3NjQzMGNiMzM1MTZmNWM4YjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whmYYKhT_uILl9fMGb9Rclq5CcbbJVNJVKSFUVsEDto',
      },
    };

    const fetchPopularMovies = async () => {
      try {
        let response = await axios.request(options);
        setPopularMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>Список популярних фільмів</h1>
      <ul>
        {popularMovies.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`}
            className={css.listNavLink}
            key={movie.id}
          >
            {movie.title ? movie.title : movie.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Home;
