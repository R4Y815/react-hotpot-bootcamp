/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function Bill({
  items, persons, setPersons, billName,
}) {
  const [display, setDisplay] = useState(0);
  const [diff, setDiff] = useState(-1);
  // Add Owed amount from each dish to persons
  function addOwedAmtPerDish(item, personsArr) {
    const sharePerDish = (dish) => (dish.price / dish.consumedBy.length);
    // 1.1 In the dish, calculate the amount each person needs to pay
    const owedAmt = sharePerDish(item);
    // 1.2 For this amount, assign it to the personal Bill of each person in that dish.
    console.log('personsArr =', personsArr);
    for (let j = 0; j < item.consumedBy.length; j += 1) {
      const eaterIndexInPersons = personsArr.findIndex((guest) => guest.name === item.consumedBy[j]);
      personsArr[eaterIndexInPersons].amount += owedAmt;
    }
  }

  function runSplitBill() {
    // clone the stateVar for this Functional Component
    const personsImage = [...persons];
    // clone itemsStateVar Array
    const itemsImage = [...items];
    for (let i = 0; i < itemsImage.length; i += 1) {
      addOwedAmtPerDish(itemsImage[i], personsImage);
    }
    console.log('personsImage after runSplitBill =', personsImage);
    console.log('items Image after runSplitBill =', itemsImage);
    setPersons(personsImage);
    setDisplay(2);
  }

  const PersonsListDisplay = persons.map((person) => (
    <div className="container" key={uuidv4()}>
      <div className="row d-flex justify-content-center">
        <div className="col-4 d-flex justify-content-center">
          <h4>{person.name}</h4>
        </div>
        <div className="col-5 d-flex justify-content-center">
          <h4>
            $
            {'  '}
            {parseFloat(person.amount).toFixed(2)}

          </h4>
        </div>
      </div>
    </div>
  ));

  let totalFromPersons = 0;
  for (let i = 0; i < persons.length; i += 1) {
    totalFromPersons += persons[i].amount;
  }

  let totalPriceItems = 0;
  for (let j = 0; j < items.length; j += 1) {
    totalPriceItems += items[j].price;
  }

  // FN: to Save Bill
  function saveBill() {
    // pool all the info required into an requestBody object;
    const requestBody = {};
    requestBody.billDetails = {
      name: billName,
      total: totalPriceItems,
    };
    const personsClone = [...persons];
    personsClone.forEach((clone) => {
      delete clone.id;
    });
    requestBody.friendsDetails = persons;
    if (totalFromPersons === totalPriceItems) {
      axios.post('/create', requestBody).then((response) => {
        console.log('added to Bills Table and Friends Table =', response);
      });
    }
  }

  return (
    <div>
      <div className="container border border-dark py-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button
              type="button"
              onClick={runSplitBill}
              className="fs-4"
            >
              Amount Due per Person
            </button>
          </div>
        </div>
        <br />
        { display > 1
        && (
        <div>
          {PersonsListDisplay}
        </div>
        )}
      </div>

      <div className="container border border-info py-3">
        <div className="row">
          <div className="col d-flex justify-content-end">
            <h4>
              <span>
                Total from all Friends:
                {' '}
                {' '}
              </span>
              <span
                className={`${totalFromPersons >= totalPriceItems ? 'text-success' : 'text-danger'}`}
              >
                $
                {totalFromPersons.toFixed(2)}
              </span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <h4>
              Total Amount Due: $
              {totalPriceItems.toFixed(2)}
            </h4>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col d-flex justify-content-end">
            <button
              type="button"
              className="fs-4"
              onClick={saveBill}
            >
              Save Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
