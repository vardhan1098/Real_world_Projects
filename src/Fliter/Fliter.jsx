import React, { useState } from "react";
import { categories } from "./data";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterItems = (id) => {
    setSelectedCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h2>Filter Items</h2>
      {categories.map((item, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid black",
            maxWidth: "100px",
            marginBottom: "10px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleFilterItems(idx)}
        >
          <h4 style={{ textAlign: "center" }}>{item.name}</h4>
          {selectedCategory === idx && (
            <div>
              {item.items.map((cat, idx) => (
                <div key={idx}>
                  <p>{cat.name || cat.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
