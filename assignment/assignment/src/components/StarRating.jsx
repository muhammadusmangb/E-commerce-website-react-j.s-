import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, size = 'medium' }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push(<span key={i} className="star half">★</span>);
    } else {
      stars.push(<span key={i} className="star empty">★</span>);
    }
  }
  return <div className={`star-rating ${size}`}>{stars}</div>;
};

export default StarRating;
