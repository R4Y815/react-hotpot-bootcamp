/* eslint-disable max-len */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function DishSelector({
  items, dishIdSelected, setDishIdSelected, dropDownItems,
}) {
  return (
    <div className="container border border-info">
      <div className="row d-flex justify-content-start">
        <div className="col-8 d-flex justify-content-start">
          <Form.Select value={dishIdSelected} onChange={(e) => setDishIdSelected(e.target.value)}>
            {dropDownItems.map((item) => {
              const { name, id, price } = item;
              return (
                <option value={id} key={uuidv4()}>
                  ===
                  {' '}
                  {name.toUpperCase()}
                  -----------
                  $
                  {price}
                </option>
              );
            })}
          </Form.Select>
          <div className="row d-flex justify-content-between">
            <div className="col-7" />
            <div className="col-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
