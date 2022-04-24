import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function EaterSelector({
  items, dishIdSelected,
  persons, personsNames, eaters, setEaters, confirmEaterList, dropDownPersons, setDropDownPersons, origDropDownPax,
}) {
  const [val, setVal] = useState();

  // RESPONSIVE DATA FOR DROPDOWN LIST
  /*   function updateDropDownList() {
  // return reactive list for dropdown menu of names
  // First retrieve names from dishIdSelected
    const dishObj = retrieveSelectedDish(dishIdSelected);
    const consumedBy = Array.from(dishObj.consumedBy);
    // Find difference between consumedBy of the dish and persons stateVar
    // ****SHOULD personsNames be made into a statevariable?*****
    const diff = personsNames.filter((x) => !consumedBy.includes(x));
    // return the difference. This should be displayed as the dropdown Names
    return diff;
  } */

  // Add person as Eater to Item Obj
  function addToEatersList() {
    console.log('val =', val);
    console.log('typeof val =', typeof (val)); // val is a string, frm input
    // clone and retrieve personObj selected
    console.log('dropDownList for Persons', dropDownPersons);
    const personsImage = [...persons];
    const personObj = personsImage.find((person) => person.id === Number(val));
    const eaterName = personObj.name;
    console.log('eaterName =', eaterName);
    // should increase as more eaters are selected
    const newEaterList = [...eaters, eaterName];
    setEaters(newEaterList);
    console.log('eaters =', eaters);

    // Eject the added Eaters from the dropdownlist
    const newDropDwnList = dropDownPersons.filter((person) => person.id !== Number(val));
    setDropDownPersons(newDropDwnList);
  }

  // Person List of Eater(Names of Persons eating)
  const eatersDisp = eaters.map((eater) => (
    <li key={uuidv4()}>{eater.toUpperCase()}</li>
  ));

  function submitEatersList() {
    confirmEaterList();
    setEaters([]);
    setDropDownPersons(origDropDownPax);
  }

  return (
    <>
      <div className="container border border-success py-3">
        <div className="row d-flex justify-content-around">
          <div className="col-6">
            <Form.Select value={val} onChange={(e) => setVal(e.target.value)}>
              {dropDownPersons.map((person, index) => {
                const { name, id } = person;
                return (
                  <option value={id} key={uuidv4()}>
                    {index}
                    )
                    {'  '}
                    {name}
                  </option>
                );
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
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-auto text-left">
                  {eatersDisp}
                </div>
              </div>
              <br />
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <button type="button" onClick={submitEatersList}> Confirm  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
