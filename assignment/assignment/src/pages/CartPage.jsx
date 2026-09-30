import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const discount = promoApplied ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = subtotal > 200 ? 0 : 15;
  const total = subtotal - discount + deliveryFee;

  const handlePromo = () => {
    if (promoCode.toUpperCase() === 'SHOP20') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try: SHOP20');
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="cart-page">
        <div className="order-success">
          <div className="success-icon">🎉</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for shopping with SHOP.CO. Your order is being processed.</p>
          <Link to="/" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">YOUR CART</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/category/all" className="btn-primary">Shop Now</Link>
          </div>
        ) : (
          <div className="cart-layout">

            {/* ─── CART ITEMS ──────────────────── */}
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <div>
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-meta">
                          Size: <strong>{item.selectedSize}</strong>
                        </p>
                        <p className="cart-item-meta">
                          Color: <span
                            className="cart-color-dot"
                            style={{ background: item.selectedColor }}
                          />
                        </p>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                        aria-label="Remove item"
                      >
                        🗑
                      </button>
                    </div>
                    <div className="cart-item-bottom">
                      <span className="cart-item-price">${item.price * item.quantity}</span>
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── ORDER SUMMARY ───────────────── */}
            <div className="order-summary">
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              {promoApplied && (
                <div className="summary-row discount-row">
                  <span>Discount (-20%)</span>
                  <span>-${discount}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>{deliveryFee === 0 ? <span className="free-tag">FREE</span> : `$${deliveryFee}`}</span>
              </div>
              {deliveryFee > 0 && (
                <p className="free-shipping-note">Add ${200 - subtotal} more for free shipping!</p>
              )}

              <div className="summary-divider" />

              <div className="summary-row total-row">
                <span>Total</span>
                <span>${total}</span>
              </div>

              {/* Promo Code */}
              <div className="promo-section">
                <div className="promo-input-row">
                  <div className="promo-input-wrapper">
                    <span className="promo-icon">🏷</span>
                    <input
                      type="text"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="promo-input"
                      disabled={promoApplied}
                    />
                  </div>
                  <button
                    className={`promo-apply-btn ${promoApplied ? 'applied' : ''}`}
                    onClick={handlePromo}
                    disabled={promoApplied}
                  >
                    {promoApplied ? '✓ Applied' : 'Apply'}
                  </button>
                </div>
                {!promoApplied && <p className="promo-hint">Try code: <strong>SHOP20</strong></p>}
              </div>

              <button className="btn-primary checkout-btn" onClick={handleCheckout}>
                Go to Checkout →
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
