import React from 'react';
import './PetList.css';

const PetList = ({ name, months }) => {
  return (
    <div className="petlist">
      <div className="petlist__header">
        <div className="petlist__info">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="petlist__body">
        <p>Age: {months} months</p>
      </div>
    </div>
  );
};

export default PetList;
