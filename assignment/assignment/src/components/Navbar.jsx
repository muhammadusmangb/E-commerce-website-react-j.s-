import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/category/all?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <div className="announcement-bar">
        Sign up and get 20% off to your first order.{' '}
        <Link to="/category/all" className="signup-link">Sign Up Now</Link>
        <button className="close-btn" aria-label="Close announcement">✕</button>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
          <Link to="/" className="navbar-logo">SHOP.CO</Link>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/category/all" onClick={() => setMenuOpen(false)}>Shop ▾</Link></li>
            <li><Link to="/category/all?filter=sale" onClick={() => setMenuOpen(false)}>On Sale</Link></li>
            <li><Link to="/category/all?filter=new" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
            <li><Link to="/category/all" onClick={() => setMenuOpen(false)}>Brands</Link></li>
          </ul>
          <form className="search-form" onSubmit={handleSearch}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </form>
          <div className="navbar-icons">
            <Link to="/cart" className="cart-icon" aria-label="Cart">
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <button className="icon-btn" aria-label="User account">👤</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
