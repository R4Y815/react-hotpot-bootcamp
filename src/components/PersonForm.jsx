import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

let personId = 1;

export default function PersonForm({
  persons, setPersons, dropDownPersons, setDropDownPersons,
}) {
  // Load At Start
  const prevBillsIdArr = [];
  useEffect(() => {
    axios.get('/getLastBillId').then((results) => {
      console.log('results at Axios.get =', results);
      const prevIdResults = results.data.allPreviousBillIds;
      // id results: [ {id:1}, {id:2}, ...];
      // need to change array of objects into array of integers:
      prevIdResults.forEach((obj) => {
        prevBillsIdArr.push(obj.id);
      });
    });
  }, []);

  let lastBillId;
  let currentBillId = 0;
  if (prevBillsIdArr.length > 0) {
    prevBillsIdArr.sort((a, b) => a - b);
    const billIdArrClone = [...prevBillsIdArr];
    lastBillId = billIdArrClone[billIdArrClone.length - 1];
    currentBillId += 1;
  } else {
    currentBillId = 1;
  }

  const personNameInput = useRef();
  function addNewPerson() {
    // create new PersonObj
    const personObj = {
      id: personId,
      name: personNameInput.current.value,
      amount: 0,
      billId: currentBillId,
    };
    personId += 1;
    console.log('Person added =', personObj);
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
