import React from "react";

export default function Hero({ children }) {
  return (
    <div>
      <div className="hero">
        <div className="banner">
          <h1>old, vintage, best </h1>
          <p>Embrace your choices - we do</p>
          {children}
        </div>
      </div>
    </div>
  );
}
