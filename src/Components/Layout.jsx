import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pet from './PetList/Pet';
import './Layout.css';

const Layout = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      //This goes off
      const pets = await axios.get(
        'https://60d075407de0b20017108b89.mockapi.io/api/v1/animals'
      );
      setPets(pets.data);
    };
    fetchPets();
  }, []);
  return (
    <div className="layout">
      <h1>Doggo Finder 🐶</h1>
      <div className="container">
        <Pet pets={pets} />
      </div>
    </div>
  );
};

export default Layout;
