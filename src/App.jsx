/* eslint-disable max-len */
import React, { useState } from 'react';
import Form from './components/Form.jsx';
import ItemList from './components/ItemList.jsx';

export default function App() {
  // ALL STATES needed in this App
  const [items, setItems] = useState([]); // tracks dishes ordered
  const zeroItem = {
    id: 0,
    name: 'PLEASE CLICK BELOW TO SELECT ITEM TO SHARE',
    price: ' PRICE $',
  };
  const origDropDownItems = [zeroItem, ...items];
  const [dropDownItems, setDropDownItems] = useState(origDropDownItems);
  const [persons, setPersons] = useState([]); // track input of person
  const zeroPerson = {
    id: 0,
    name: 'PLEASE CLICK TO SELECT EATER',
    personalBill: 0,
  };
  const origDropDownPax = [zeroPerson, ...persons];
  const [dropDownPersons, setDropDownPersons] = useState(origDropDownPax);
  const [portionBill, setPortionBill] = useState(0);
  const [totalBill, setTotalBill] = useState(0); // tracks total bill

  return (
    <div>
      <>
        <Form items={items} setItems={setItems} persons={persons} setPersons={setPersons} dropDownPersons={dropDownPersons} setDropDownPersons={setDropDownPersons} dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} />
      </>
      <>
        <ItemList items={items} setItems={setItems} persons={persons} setPersons={setPersons} dropDownPersons={dropDownPersons} setDropDownPersons={setDropDownPersons} dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} origDropDownPax={origDropDownPax} />
      </>

      {/*       <>
        <Bill />
      </> */}

    </div>
  );
}
