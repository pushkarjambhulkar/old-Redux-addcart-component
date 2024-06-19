// src/Components/Header.js
import React from 'react';

function Header(props) {
  console.warn(props.data); // Check what is being received here

  // Conditional rendering to handle undefined props.data
  const itemCount = props.data ? props.data.cardData.length : 0;

  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{itemCount}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="Cart" />
      </div>
    </div>
  );
}

export default Header;
