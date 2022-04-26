import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

let personId = 1;

export default function PersonForm({
  persons, setPersons, dropDownPersons, setDropDownPersons,
}) {
  const personNameInput = useRef();
  function addNewPerson() {
    // create new PersonObj
    const personObj = {
      id: personId,
      name: personNameInput.current.value,
      amount: 0,
    };
    personId += 1;
    // add new PersonObj to 'persons' stateVar
    const newPersonsState = [...persons, personObj];
    setPersons(newPersonsState);
    const newDropDwnPax = [...dropDownPersons, personObj];
    setDropDownPersons(newDropDwnPax);
    personNameInput.current.value = null;
  }
  return (
    <div className="container border border-info py-3">
      <div className="row d-flex justify-content-center">
        <div className="col-auto">
          <input
            ref={personNameInput}
            type="text"
            placeholder="Person's FirstName"
            size="20"
          />
        </div>
        <div className="col-auto text-left">
          <button
            type="button"
            onClick={addNewPerson}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
