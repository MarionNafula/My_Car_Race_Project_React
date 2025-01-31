import React from "react";

const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
