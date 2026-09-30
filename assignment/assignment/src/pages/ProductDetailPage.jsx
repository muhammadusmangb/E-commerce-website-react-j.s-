import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { products, reviews } from '../data/products';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <Link to="/category/all" className="btn-primary">Go Back</Link>
      </div>
    );
  }

  const discountedPrice = product.discount > 0
    ? Math.round(product.originalPrice * (1 - product.discount / 100))
    : null;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select color and size first!');
      return;
    }
    addToCart(product, selectedColor, selectedSize, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <div className="product-detail-page">
      <div className="detail-container">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> ›{' '}
          <Link to={`/category/${product.category}`}>{product.category}</Link> ›{' '}
          <span>{product.name}</span>
        </div>

        {/* ─── PRODUCT MAIN ───────────────────── */}
        <div className="product-main">

          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="thumbnails">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`thumb-btn ${selectedImage === i ? 'active' : ''}`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-detail">
            <h1 className="product-title">{product.name}</h1>

            <div className="rating-row">
              <StarRating rating={product.rating} size="medium" />
              <span className="rating-text">{product.rating}/5</span>
              <span className="review-count">({product.reviewCount} Reviews)</span>
            </div>

            <div className="price-row">
              <span className="detail-price">
                ${discountedPrice !== null ? discountedPrice : product.price}
              </span>
              {discountedPrice !== null && (
                <>
                  <span className="detail-original">${product.originalPrice}</span>
                  <span className="detail-discount">-{product.discount}%</span>
                </>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="option-divider" />

            {/* Color Selector */}
            <div className="option-group">
              <h4 className="option-label">Select Colors</h4>
              <div className="color-selector">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-dot ${selectedColor === color ? 'selected' : ''}`}
                    style={{ background: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color}
                  >
                    {selectedColor === color && <span className="check-mark">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-divider" />

            {/* Size Selector */}
            <div className="option-group">
              <h4 className="option-label">Choose Size</h4>
              <div className="size-selector">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`detail-size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-divider" />

            {/* Add to Cart */}
            <div className="add-to-cart-row">
              <div className="quantity-control">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <button
                className={`btn-primary add-cart-btn ${addedFeedback ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {addedFeedback ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>

        {/* ─── PRODUCT TABS ───────────────────── */}
        <div className="product-tabs">
          <div className="tab-headers">
            {['details', 'rating', 'faqs'].map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'details' ? 'Product Details' : tab === 'rating' ? 'Rating & Reviews' : 'FAQs'}
              </button>
            ))}
          </div>

          {activeTab === 'details' && (
            <div className="tab-content">
              <p>{product.description}</p>
              <ul>
                <li>Category: {product.category}</li>
                <li>Style: {product.style}</li>
                <li>Gender: {product.gender}</li>
                <li>Available sizes: {product.sizes.join(', ')}</li>
              </ul>
            </div>
          )}

          {activeTab === 'rating' && (
            <div className="tab-content">
              <div className="rating-summary">
                <div className="big-rating">
                  <span className="big-number">{product.rating}</span>
                  <StarRating rating={product.rating} size="large" />
                  <span>{product.reviewCount} Reviews</span>
                </div>
              </div>
              <div className="reviews-list">
                {reviews.map(r => (
                  <div key={r.id} className="review-item">
                    <StarRating rating={r.rating} size="small" />
                    <div className="reviewer">
                      <strong>{r.name}</strong>
                      {r.verified && <span className="verified-tag">✓ Verified</span>}
                      <span className="review-date-tag">{r.date}</span>
                    </div>
                    <p>"{r.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="tab-content faq-content">
              {[
                { q: 'What is your return policy?', a: 'We accept returns within 30 days of purchase for unworn, unwashed items with tags attached.' },
                { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days.' },
                { q: 'Do you offer size exchanges?', a: 'Yes! We offer free size exchanges within 14 days of receiving your order.' },
              ].map((faq, i) => (
                <div key={i} className="faq-item">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── YOU MIGHT ALSO LIKE ─────────────── */}
        {relatedProducts.length > 0 && (
          <section className="related-section">
            <h2 className="related-title">YOU MIGHT ALSO LIKE</h2>
            <div className="related-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProductDetailPage;
