// src/components/Skeleton.jsx
import React from "react";

const Skeleton = ({ count }) => {
  return (
    <div className="skeleton-list">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card"></div>
      ))}
    </div>
  );
};

export default Skeleton;