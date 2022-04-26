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
  items, setItems, persons, dropDownPersons, setDropDownPersons, dropDownItems, setDropDownItems, origDropDownPax,
}) {
  const [dishIdSelected, setDishIdSelected] = useState(''); // returns ID of item (in string)
  function retrieveSelectedDish(id) {
    const itemsImage = [...items];
    const dishObj = itemsImage.find((item) => item.id === id);
    return dishObj;
  }

  const [eaters, setEaters] = useState([]);

  function confirmEaterList() {
    // locate item from items
    const positionIndx = items.findIndex((item) => item.id === Number(dishIdSelected));
    console.log('positionIndx =', positionIndx);

    const selectedDish = retrieveSelectedDish(Number(dishIdSelected));
    console.log('selectedDish =', selectedDish);

    // add eaters List to itemObject
    const newItems = [...items];
    console.log('newItems[positionIndx] =', newItems[positionIndx]);
    const eatersImage = [...eaters];
    eatersImage.forEach((eater) => {
      newItems[positionIndx].consumedBy.push(eater);
    });
    setItems(newItems);
    console.log('items after adding Eaters=', items);

    // Expunge Shared Dish from dropdown
    const newDropDwnItems = dropDownItems.filter((item) => item.id !== Number(dishIdSelected));
    setDropDownItems(newDropDwnItems);
  }

  return (
    <>
      <div>
        <h3>Item List</h3>
        <div>
          <DishSelector items={items} dishIdSelected={dishIdSelected} setDishIdSelected={setDishIdSelected} dropDownItems={dropDownItems} />
        </div>
        <br />
        <div>
          <EaterSelector persons={persons} eaters={eaters} setEaters={setEaters} confirmEaterList={confirmEaterList} items={items} dishIdSelected={dishIdSelected} dropDownPersons={dropDownPersons} setDropDownPersons={setDropDownPersons} origDropDownPax={origDropDownPax} retrieveSelectedDish={retrieveSelectedDish} />
        </div>
      </div>
    </>
  );
}
