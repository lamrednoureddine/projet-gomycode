// src/components/ServiceCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceCard.css';

const ServiceCard = ({ image, title, description }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="col-md-4">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
