import React, { useRef } from 'react';

let personId = 1;

export default function PersonForm({ persons, setPersons }) {
  const personNameInput = useRef();
  function addNewPerson() {
    // create new PersonObj
    const personObj = {
      id: Number(personId),
      name: personNameInput.current.value,
      personalBill: 0,
    };
    // add new PersonObj to 'persons' stateVar
    const newPersonsState = [...persons, personObj];
    setPersons(newPersonsState);
    personId += 1;
    personNameInput.current.value = null;
  }
  return (
    <div className="container border border-info py-3">
      <div className="row d-flex justify-content-around">
        <div className="col-auto">
          <input
            ref={personNameInput}
            type="text"
            placeholder="Person's FirstName"
            size="20"
          />
        </div>
        <div className="col-auto">
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
