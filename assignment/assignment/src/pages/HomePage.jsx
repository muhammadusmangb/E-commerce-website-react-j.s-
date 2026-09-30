import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import { products, reviews, categories } from '../data/products';
import './HomePage.css';

const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];

const newArrivals = products.filter(p => p.isNew).slice(0, 4);
const topSelling = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 4);

const HomePage = () => {
  return (
    <main className="homepage">

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            FIND CLOTHES<br />
            THAT MATCHES<br />
            <span>YOUR STYLE</span>
          </h1>
          <p className="hero-desc">
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <Link to="/category/all" className="btn-primary hero-btn">Shop Now</Link>
          <div className="hero-stats">
            <div className="stat">
              <strong>200+</strong>
              <span>International Brands</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>2,000+</strong>
              <span>High-Quality Products</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>30,000+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-badge hero-badge-left">
            <span className="badge-star">★</span>
            <div>
              <strong>4.8/5</strong>
              <small>Our Rating</small>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&h=800&fit=crop&crop=faces"
            alt="Fashion hero"
            className="hero-img"
          />
          <div className="hero-badge hero-badge-right">
            <span className="badge-check">✓</span>
            <div>
              <strong>Our Happy Customer</strong>
              <small>104,000 Reviews</small>
            </div>
          </div>
          <div className="hero-sparkle hero-sparkle-1">✦</div>
          <div className="hero-sparkle hero-sparkle-2">✦</div>
        </div>
      </section>

      {/* ─── BRANDS ───────────────────────────────── */}
      <section className="brands-strip">
        <div className="brands-container">
          {brands.map(brand => (
            <span key={brand} className="brand-name">{brand}</span>
          ))}
        </div>
      </section>

      {/* ─── NEW ARRIVALS ─────────────────────────── */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <div className="products-grid">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/category/all?filter=new" className="btn-outline">View All</Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── TOP SELLING ──────────────────────────── */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">TOP SELLING</h2>
          <div className="products-grid">
            {topSelling.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/category/all" className="btn-outline">View All</Link>
          </div>
        </div>
      </section>

      {/* ─── BROWSE BY STYLE ──────────────────────── */}
      <section className="style-section">
        <div className="section-container">
          <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
          <div className="style-grid">
            {categories.map(cat => (
              <Link to={`/category/${cat.id}`} key={cat.id} className="style-card">
                <img src={cat.image} alt={cat.label} className="style-img" loading="lazy" />
                <span className="style-label">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUSTOMER REVIEWS ─────────────────────── */}
      <section className="reviews-section">
        <div className="section-container">
          <div className="reviews-header">
            <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
            <div className="reviews-nav">
              <button className="nav-arrow">‹</button>
              <button className="nav-arrow">›</button>
            </div>
          </div>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <StarRating rating={review.rating} size="small" />
                <div className="reviewer-name">
                  {review.name}
                  {review.verified && <span className="verified-badge">✓</span>}
                </div>
                <p className="review-text">"{review.comment}"</p>
                <span className="review-date">{review.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
