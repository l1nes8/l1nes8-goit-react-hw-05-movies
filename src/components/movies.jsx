import React, { useState } from 'react';
import axios from 'axios';
import css from 'style.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        include_adult: 'false',
        language: 'en-US',
        page: '1',
        query: query,
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDRmZTdlM2QwYTY5MzA2MzQ4ZTUxN2YyMWM3MGE3OSIsInN1YiI6IjY1Mjk3NjQzMGNiMzM1MTZmNWM4YjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whmYYKhT_uILl9fMGb9Rclq5CcbbJVNJVKSFUVsEDto',
      },
    };

    axios
      .request(options)
      .then(response => {
        setResults(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div>
      <h1>Search for movies by keyword</h1>
      <form onSubmit={handleSubmit} className={css.formSumbit}>
        <input
          className={css.inputSearch}
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="write the name of the movie"
          required
        />
        <button type="submit" className={css.btnSearch}>
          Search
        </button>
      </form>

      <ul>
        {results.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              <h3>{movie.title || movie.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
