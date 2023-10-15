import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useLocation, Link } from 'react-router-dom';
import css from 'style.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, serError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/movies/${movieId}`);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
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
        setCast(response.data.cast);
        console.log(response.data);
      })
      .catch(error => {
        serError(error);
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      <h2>Cast Information</h2>
      {cast.length > 0 && (
        <ul className={css.listCast}>
          {cast.map(actor => (
            <li key={actor.id} className={css.itemCast}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <p>There was a problem with your request.</p>}
    </div>
  );
};

export default Cast;
