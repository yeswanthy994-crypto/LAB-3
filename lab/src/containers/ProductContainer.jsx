// src/containers/ProductContainer.jsx
import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Skeleton from "../components/Skeleton";
import { createFetchTracker } from "./fetchTracker";

const tracker = createFetchTracker();

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({ attempts: 0, lastFetch: null });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      tracker.recordAttempt();

      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
        setInfo(tracker.getInfo());
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="dashboard-box">
      <h1>Product Listing Page</h1>
      <p>Fetch attempts: {info.attempts} | Last fetch: {info.lastFetch}</p>
      {loading ? <Skeleton count={6} /> : <ProductList products={products} />}
    </div>
  );
};

export default ProductContainer;