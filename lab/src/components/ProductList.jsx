// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map(({ id, title, price, thumbnail }) => (
      <ProductCard key={id} title={title} price={price} thumbnail={thumbnail} />
    ))}
  </div>
);

export default ProductList;