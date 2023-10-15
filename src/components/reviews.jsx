import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useLocation, Link } from 'react-router-dom';
import css from 'style.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/movies/${movieId}`);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDRmZTdlM2QwYTY5MzA2MzQ4ZTUxN2YyMWM3MGE3OSIsInN1YiI6IjY1Mjk3NjQzMGNiMzM1MTZmNWM4YjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whmYYKhT_uILl9fMGb9Rclq5CcbbJVNJVKSFUVsEDto',
      },
    };

    axios
      .request(options)
      .then(response => {
        setReviews(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      <h2>Movie Reviews</h2>
      <div className={css.reviews}>
        {reviews.map(review => (
          <li key={review.id} className={css.itemReviews}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
