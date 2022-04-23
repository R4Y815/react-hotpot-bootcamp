import React, { useRef } from 'react';

export default function PersonForm({ persons, setPersons }) {
  const personNameInput = useRef();
  function addNewPerson() {
    // create new PersonObj
    const personObj = {
      name: personNameInput.current.value,
      personalBill: 0,
    };
    // add new PersonObj to 'persons' stateVar
    persons.push(personObj);
    const newPersonsState = [...persons];
    setPersons(newPersonsState);
    personNameInput.current.value = null;
  }
  return (
    <div className="container border border-info">
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
