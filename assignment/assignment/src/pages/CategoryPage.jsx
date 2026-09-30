import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './CategoryPage.css';

const SIZES = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
const SORT_OPTIONS = ['Most Popular', 'Newest', 'Price: Low to High', 'Price: High to Low'];
const STYLE_OPTIONS = ['casual', 'formal', 'party', 'gym'];

const CategoryPage = () => {
  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const filterQuery = searchParams.get('filter') || '';

  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (type && type !== 'all') {
      result = result.filter(p => p.style === type || p.category === type);
    }

    // Search filter
    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // New/Sale filter from URL
    if (filterQuery === 'new') result = result.filter(p => p.isNew);
    if (filterQuery === 'sale') result = result.filter(p => p.discount > 0);

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    // Style filter
    if (selectedStyle) {
      result = result.filter(p => p.style === selectedStyle);
    }

    // Sort
    switch (sortBy) {
      case 'Price: Low to High': result.sort((a, b) => a.price - b.price); break;
      case 'Price: High to Low': result.sort((a, b) => b.price - a.price); break;
      case 'Newest': result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      default: result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [type, searchQuery, filterQuery, priceRange, selectedSizes, selectedStyle, sortBy]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const pageTitle = type === 'all' ? 'All Products' : (type ? type.charAt(0).toUpperCase() + type.slice(1) : 'All Products');

  return (
    <div className="category-page">
      <div className="category-container">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> › <span>{pageTitle}</span>
        </div>

        <div className="category-layout">

          {/* ─── FILTER SIDEBAR ────────────────── */}
          <aside className={`filter-sidebar ${showFilters ? 'open' : ''}`}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="filter-clear" onClick={() => {
                setPriceRange([0, 500]);
                setSelectedSizes([]);
                setSelectedStyle('');
              }}>Clear All</button>
            </div>

            <div className="filter-divider" />

            {/* Category Links */}
            <div className="filter-section">
              {['t-shirts', 'shorts', 'shirts', 'hoodie', 'jeans', 'dresses'].map(cat => (
                <Link
                  key={cat}
                  to={`/category/${cat}`}
                  className={`filter-category-link ${type === cat ? 'active' : ''}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)} <span>›</span>
                </Link>
              ))}
            </div>

            <div className="filter-divider" />

            {/* Price Range */}
            <div className="filter-section">
              <h4 className="filter-label">Price</h4>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="price-slider"
              />
              <div className="price-display">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div className="filter-divider" />

            {/* Colors */}
            <div className="filter-section">
              <h4 className="filter-label">Colors</h4>
              <div className="color-swatches">
                {['#4A4A8A', '#C75B5B', '#4A7A4A', '#F5A623', '#1A1A1A', '#F5F5F5', '#3A7A8A', '#8A5A3A', '#7A3A8A', '#C7C75B'].map(color => (
                  <button key={color} className="color-swatch" style={{ background: color }} aria-label={color} />
                ))}
              </div>
            </div>

            <div className="filter-divider" />

            {/* Sizes */}
            <div className="filter-section">
              <h4 className="filter-label">Size</h4>
              <div className="size-options">
                {SIZES.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSizes.includes(size) ? 'selected' : ''}`}
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-divider" />

            {/* Dress Style */}
            <div className="filter-section">
              <h4 className="filter-label">Dress Style</h4>
              {STYLE_OPTIONS.map(style => (
                <button
                  key={style}
                  className={`filter-category-link ${selectedStyle === style ? 'active' : ''}`}
                  onClick={() => setSelectedStyle(selectedStyle === style ? '' : style)}
                  style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                >
                  {style.charAt(0).toUpperCase() + style.slice(1)} <span>›</span>
                </button>
              ))}
            </div>

            <button className="btn-primary apply-btn" onClick={() => setShowFilters(false)}>
              Apply Filter
            </button>
          </aside>

          {/* ─── PRODUCTS AREA ─────────────────── */}
          <div className="products-area">
            <div className="products-toolbar">
              <div className="toolbar-left">
                <h1 className="category-title">{pageTitle}</h1>
                <span className="products-count">{filteredProducts.length} Products</span>
              </div>
              <div className="toolbar-right">
                <button className="filter-toggle-btn" onClick={() => setShowFilters(!showFilters)}>
                  ⚙ Filters
                </button>
                <div className="sort-wrapper">
                  <span className="sort-label">Sort by:</span>
                  <select
                    className="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {paginatedProducts.length === 0 ? (
              <div className="no-products">
                <p>No products found. Try adjusting your filters.</p>
                <Link to="/category/all" className="btn-primary">View All Products</Link>
              </div>
            ) : (
              <div className="category-products-grid">
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  ‹ Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="page-btn"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next ›
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
