import React from 'react';
import ItemForm from './ItemForm.jsx';
import PersonForm from './PersonForm.jsx';

export default function Form({
  items, setItems, persons, setPersons,
}) {
  return (
    <>
      <ItemForm items={items} setItems={setItems} />
      <br />
      <PersonForm persons={persons} setPersons={setPersons} />
    </>
  );
}
