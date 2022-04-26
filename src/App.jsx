/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import ItemList from './components/ItemList.jsx';
import Bill from './components/Bill.jsx';

export default function App() {
  // ALL STATES needed in this App
  const [billName, setBillName] = useState('');

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
    name: 'CLICK TO SELECT EATER',
    amount: 0,
  };
  const origDropDownPax = [zeroPerson, ...persons];
  const [dropDownPersons, setDropDownPersons] = useState(origDropDownPax);

  // Bill Name Input Bar
  const billNameInput = useRef();
  function addBillName() {
    setBillName(billNameInput.current.value);
    billNameInput.current.value = null;
  }

  return (
    <div>
      <>
        <div className="container border border-primary py-3">
          <div className="row d-flex justify-content-center">
            <div className="col-auto px-0">
              <input
                ref={billNameInput}
                type="text"
                placeholder="Name of Bill"
                size="20"
              />
            </div>
            <div className="col-auto text-left px-0">
              <button
                type="button"
                onClick={addBillName}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
      <>
        <Form items={items} setItems={setItems} persons={persons} setPersons={setPersons} dropDownPersons={dropDownPersons} setDropDownPersons={setDropDownPersons} dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} />
      </>
      <>
        <ItemList items={items} setItems={setItems} persons={persons} dropDownPersons={dropDownPersons} setDropDownPersons={setDropDownPersons} dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} origDropDownPax={origDropDownPax} />

      </>
      <>
        <Bill items={items} setItems={setItems} persons={persons} setPersons={setPersons} billName={billName} />
      </>
    </div>
  );
}
