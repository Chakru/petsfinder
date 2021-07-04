import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PetList from './PetList/PetList';
import './Pet.css';

const petsPerPage = 10;

const Pet = props => {
  // No Pets Available
  const NA = (
    <div className="na">
      <p>No Pet found 😥</p>
      <p>Search Again</p>
    </div>
  );

  //Main display of the list
  const getListToDisplay = () => {
    let displayList = props.pets;
    if (displayList.length === 0) {
      return NA;
    }
    return displayList.map(pet => {
      const bornDate = new Date(pet.bornAt);
      const today = new Date();
      let differenceInDays = today.getTime() - bornDate.getTime();
      let Difference_In_Days = differenceInDays / (1000 * 3600 * 24);
      let months = Math.floor(Difference_In_Days.toLocaleString() / 30);
      return <PetList key={pet.id} name={pet.name} months={months} />;
    });
  };

  return <>{getListToDisplay()}</>;
};

export default Pet;
