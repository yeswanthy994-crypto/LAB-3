// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ title, price, thumbnail }) => (
  <div className="product-card">
    <img src={thumbnail} alt={title} />
    <h3>{title}</h3>
    <p>${price}</p>
  </div>
);

export default ProductCard;