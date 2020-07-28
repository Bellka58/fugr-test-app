import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import CustomTable from "./components/table";
import FilterField from './components/filter-field';
import UserInfo from './components/user-info';
import DataSelectButtons from './components/data-select-buttons';
import UserForm from './components/user-form';

function App() {
  const [filterField, setFilterField] = useState('');
  const [user, setUser] = useState(null);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [isSmallData, setIsSmallData] = useState(true);

  return (
    <Container maxWidth="md" className="app">
      <DataSelectButtons
        isSmallData={isSmallData}
        setIsSmallData={setIsSmallData}
        setFormIsOpen={setFormIsOpen}
        formIsOpen={formIsOpen} 
        />

      {formIsOpen && <UserForm/>}
        <FilterField
          filterField={filterField}
          setFilterField={setFilterField}
        />
      <CustomTable isSmallData={isSmallData} filterField={filterField} setUser={setUser} />
      {!!user && !!Object.keys(user).length && <UserInfo user={user} />}
    </Container>
  );
}

export default App;
