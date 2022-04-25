/* eslint-disable max-len */
import React from 'react';
import ItemForm from './ItemForm.jsx';
import PersonForm from './PersonForm.jsx';

export default function Form({
  items, setItems, persons, setPersons, dropDownPersons, setDropDownPersons, dropDownItems, setDropDownItems,
}) {
  return (
    <>
      <ItemForm items={items} setItems={setItems} dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} />
      <br />
      <PersonForm persons={persons} setPersons={setPersons} dropDownPersons={dropDownPersons} setDropDownPersons={setDropDownPersons} />
      <br />
    </>
  );
}
