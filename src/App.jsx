/* eslint-disable max-len */
import React, { useState } from 'react';
import Form from './components/Form.jsx';
import ItemList from './components/ItemList.jsx';

export default function App() {
  // ALL STATES needed in this App

  const [items, setItems] = useState([]); // tracks dishes ordered
  const [persons, setPersons] = useState([]); // track input of person
  const [portionBill, setPortionBill] = useState(0);
  const [totalBill, setTotalBill] = useState(0); // tracks total bill

  return (
    <div>
      <>
        <Form items={items} setItems={setItems} persons={persons} setPersons={setPersons} />
      </>
      <>
        <ItemList items={items} setItems={setItems} persons={persons} setPersons={setPersons} />
      </>

      {/*       <>
        <Bill />
      </> */}

    </div>
  );
}
