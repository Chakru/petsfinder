import React from 'react';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './Filter.css';

const Filter = props => {
  // Seding sortTerm to parent component.
  const handleSort = sortTerm => {
    props.onSort(sortTerm);
  };

  return (
    <div className="filter__buttons">
      <Button
        variant="contained"
        color="default"
        startIcon={<FilterListIcon />}
      >
        Filter
      </Button>

      <Button
        variant="contained"
        color="default"
        onClick={() => handleSort('asc')}
        endIcon={<ArrowUpwardIcon />}
      >
        Youngest
      </Button>

      <Button
        variant="contained"
        color="default"
        onClick={() => handleSort('dsc')}
        endIcon={<ArrowDownwardIcon />}
      >
        Eldest
      </Button>
    </div>
  );
};

export default Filter;
