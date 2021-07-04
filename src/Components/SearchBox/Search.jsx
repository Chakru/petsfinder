import React, { useRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';

const Search = props => {
  const searchInput = useRef('');
  //Pushing the user input values to the parent component.
  const getSearchTerm = () => {
    props.searchKeyword(searchInput.current.value);
  };

  return (
    <div className="search">
      <div className="search__inputContainer">
        <div className="search__input">
          <SearchIcon />
          <input
            ref={searchInput}
            type="text"
            placeholder="Enter the Pet's Name"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
