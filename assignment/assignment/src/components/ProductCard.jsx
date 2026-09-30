import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const discountedPrice = product.discount > 0
    ? Math.round(product.originalPrice * (1 - product.discount / 100))
    : null;

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
        {product.isNew && !product.discount && (
          <span className="new-badge">NEW</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <StarRating rating={product.rating} size="small" />
        <div className="product-price">
          <span className="current-price">
            ${discountedPrice !== null ? discountedPrice : product.price}
          </span>
          {discountedPrice !== null && (
            <>
              <span className="original-price">${product.originalPrice}</span>
              <span className="discount-label">-{product.discount}%</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
