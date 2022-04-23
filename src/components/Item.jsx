/* eslint-disable max-len */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import EaterList from './EaterSelector.jsx';

export default function Item({ items }) {
  

  return (
    <div>
      <DishSelector />
      <EaterList persons={persons} setPersons={setPersons} eaterSelected
    </div>
  );
}
