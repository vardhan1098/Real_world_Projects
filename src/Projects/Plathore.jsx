import React from 'react';
import data from '../../public/data.json';

const App = () => {
  return (
    <div>
      <h1>Categories</h1>
      {data.categories.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {category.items.map((item) => (
              <div
                key={item.id}
                style={{
                  border: '1px solid gray',
                  padding: '1rem',
                  borderRadius: '10px',
                  width: '200px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
