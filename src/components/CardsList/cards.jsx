import React from 'react';
import './cards.css'

const CardsList = () => {
  const cards = Array.from({ length: 40 }, (_, i) => i + 1); // Generate an array [1, 2, ..., 9]
  return (
    <section>
        <div className="cards-list">
          {cards.map((card) => (
            <div className="card-container" key={card}>
              <div className="img-card"></div>
              <div className="card-details">
                <div className="card-circle"></div>
                <div className="name-con">
                  <div className="card-name"></div>
                  <div className="card-desc"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default CardsList;
