import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PetList from './PetList/PetList';
import './Pet.css';

const petsPerPage = 10;

const Pet = ({ pets }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(pets.length / petsPerPage);

  // No Pets Available
  const NA = (
    <div className="na">
      <p>No Pet found 😥</p>
      <p>Please Search Again</p>
    </div>
  );

  //Main display of the list
  const getListToDisplay = () => {
    const pageVisited = pageNumber * petsPerPage;
    let displayList = [];
    if (displayList.length === 0) {
      return NA;
    }
    return displayList
      .slice(pageVisited, pageVisited + petsPerPage)
      .map(pet => {
        const bornDate = new Date(pet.bornAt);
        const today = new Date();
        let differenceInDays = today.getTime() - bornDate.getTime();
        let Difference_In_Days = differenceInDays / (1000 * 3600 * 24);
        let months = Math.floor(Difference_In_Days.toLocaleString() / 30);
        return <PetList key={pet.id} name={pet.name} months={months} />;
      });
  };

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {getListToDisplay()}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePageHandler}
        containerClassName={'paginationButton'}
        previousLinkClassName={'previousButton'}
        nextLinkClassName={'nextButton'}
        activeClassName={'paginationActive'}
      />
    </>
  );
};

export default Pet;
