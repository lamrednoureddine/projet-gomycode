// Fichier : listerestaurant.js

import React, { useState } from 'react';
import './ListeRestaurant.css';

const restaurantsData = [
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },{
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },
  
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  },
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg',
    description: 'Description du restaurant 1...',
    menu: ['Plat 1', 'Plat 2', 'Plat 3'],
    position: 'Adresse du restaurant 1',
    contact: {
      email: 'email@restaurant1.com',
      facebook: 'facebook.com/restaurant1',
      phone: '123-456-7890',
    },
    
  }
  // ... Ajoutez d'autres restaurants avec leurs détails
];

// ... (code précédent)

const ListeRestaurant = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurants = restaurantsData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="restaurant-page">
      <section className="search-section">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </section>

      <section className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <ul>
              {restaurant.menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{restaurant.position}</p>
            <p>Email: {restaurant.contact.email}</p>
            <p>Facebook: {restaurant.contact.facebook}</p>
            <p>Téléphone: {restaurant.contact.phone}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListeRestaurant;

