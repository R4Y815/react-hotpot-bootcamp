/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import DishSelector from './DishSelector.jsx';
import EaterSelector from './EaterSelector.jsx';

// INFO that ITEMLIST needs to access
// item, item price
// persons who ate this item

export default function ItemList({
  items, setItems, persons, setPersons,
}) {
  const [dishIdSelected, setDishIdSelected] = useState(''); // returns ID of item
  const selectedDish = items.find((item) => item.id === dishIdSelected);
  const [eaters, setEaters] = useState(selectedDish.consumedBy); // Arr of persons' names.

  // compile list of persons' names from persons
  const personsNames = [];
  persons.forEach((person) => {
    person.name.push(personsNames);
  });

  function confirmEaterList() {
    // locate item from items
    const indx = items.findIndex((item) => item.id === dishIdSelected);
    // add eaters List to itemObject
    eaters.forEach((eater) => {
      items[indx].consumedBy.push(eater);
    });
    const newItems = Array.from(items);
    setItems(newItems);
  }

  return (
    <>
      <h3>Item List</h3>
      <div>
        <DishSelector items={items} dishIdSelected={dishIdSelected} setDishIdSelected={setDishIdSelected} />
      </div>
      <br />
      <div>
        <EaterSelector persons={personsNames} eaters={eaters} setEaters={setEaters} confirmEaterList={confirmEaterList} items={items} dishIdSelected={dishIdSelected} />
      </div>

    </>
  );
}
