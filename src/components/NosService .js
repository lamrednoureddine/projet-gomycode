import React from 'react';
import ServiceCard from './ServiceCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const NosService = () => {
  const services = [
    {
      title: 'Nos Restaurant ',
      image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
      description: 'Description du service 1.',
    },
    {
      title: 'Nos Magasin',
      image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
      description: 'Descrnjhiption du service 2.',
    },
    {
      title: 'Nos Patessiri',
      image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
      description: 'Description du service 3.',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default NosService ;
