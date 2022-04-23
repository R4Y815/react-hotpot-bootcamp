import React, { useState } from 'react';
import Form from './components/Form.jsx';
import ItemList from './components/ItemList.jsx';

export default function App() {
  // ALL STATES needed in this App
  /* const [itemList, setItemList] = useState([]); */ // tracks dish being ordered
  const [items, setItems] = useState([]); // tracks dishes ordered
  /* const [personList, setPersonList] = useState([]); */
  const [persons, setPersons] = useState([]); // track input of person

  const [portionBill, setPortionBill] = useState(0);
  const [totalBill, setTotalBill] = useState(0); // tracks total bill

  // state that need to be accessible by all children: item, person?

  // states that FORM needs: item, person
  // states that Item needs: itemList, personList
  // info Total bill needs to know: itemList, personList

  //               Bill
  //                 |
  //              Person
  //               /

  // ITEM OBJ
  const itemO = {
    name: ' ',
    unitPrice: 0.00,
    personsWhoAteThisDish: ['Blackhole1', 'Vaccuum2', 'Bin3'],
  };

  // after persons are confirmed is to eat this dish, run logic to update the
  // share cost of eating this dish, and update the personal bill in each person
  //

  // personObj -becos we cannot repeat items names in itemList
  const person0 = {
    name: ' ',
    personalBill: 0.00, // should this be a state ?
  };

  return (
    <div>
      <>
        <Form items={items} setItems={setItems} persons={persons} setPersons={setPersons} />
      </>
      <>
        <ItemList />
      </>
      {/*       <>
        <Bill />
      </> */}

    </div>
  );
}
