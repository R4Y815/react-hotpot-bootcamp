import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function EaterSelector({
  items, dishIdSelected,
  personsNames, eaters, setEaters, confirmEaterList,
}) {
  const [val, setVal] = useState();
  // CHANGE PERSONS NAMES TO BE DERIVED FROM AFTER COMPARING WITH SELECTED DISH CONSUMED BY
  const [dropDownNames, setDropDownNames] = useState(personsNames);
  console.log(val);
  // dropdown menu person selection based on existing persons state

  // Add person as Eater to Item Obj
  function addToEatersList() {
    // Retrieve and clone personObj selected
    const eaterObj = dropDownNames.find((person) => person.id === val);
    // Eject eaterObj from the dropdown so that it doesn't appear again for the same item
    const newDropDownNames = dropDownNames.filter((person) => person.id !== val);
    setDropDownNames(newDropDownNames);
    // Update the EaterList (EaterList = dropDownNames')
    // should increase as more eaters are selected
    const newEaterList = [...eaters, eaterObj];
    setEaters(newEaterList);
  }

  // Person List of Eater(Names of Persons eating)
  const eatersDisp = eaters.map((eater) => (
    <li key={uuidv4()}>{eater.name}</li>
  ));

  function submitEatersList() {
    confirmEaterList();
    setDropDownNames(personsNames);
    setEaters([]);
  }

  return (
    <div className="container border border-success py-3">
      <div className="row d-flex justify-content-around">
        <div className="col-6">
          <Form.Select value={val} onChange={(e) => setVal(e.target.value)}>
            {persons.map((person) => {
              const { name, id } = person;
              return <option value={id}>{name}</option>;
            })}
          </Form.Select>
        </div>
        <div className="col-3">
          <button
            type="button"
            onClick={addToEatersList}
          >
            Add Eater
          </button>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <h3>List Persons who ate (this Dish:)</h3>
              </div>
              <div className="col-auto">
                <button type="button" onClick={submitEatersList}> Confirm  </button>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-auto">{eatersDisp}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
