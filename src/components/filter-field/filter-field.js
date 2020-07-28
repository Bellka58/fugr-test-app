import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const FilterField = ({setFilterField}) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event) => {
    setValue(event.target.value)
  };

  const handleButtonClick = () => {
    setFilterField(value)
  };
  return (
    <form id="search-string" style={{display: 'flex', alignItems: "flex-end", marginTop: 20}}>
      <TextField
        value={value}
        onChange={handleChangeValue}
        id="standard-search"
        label="Search field"
        type="search"
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleButtonClick}
        style={{ marginLeft: 20}}>
        Найти
      </Button>
    </form>
  );
};

export default FilterField;