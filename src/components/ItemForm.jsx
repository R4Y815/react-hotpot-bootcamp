import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

let itemId = 1;
export default function ItemForm({
  items, setItems, dropDownItems, setDropDownItems,
}) {
  // Ref id the inputs to value retrieval
  const itemNameInput = useRef();
  const itemPriceInput = useRef();

  /*   function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
  } */

  function addNewItem() {
    // create new ItemObj
    const itemObj = {
      id: itemId,
      name: itemNameInput.current.value,
      price: Number(itemPriceInput.current.value),
      consumedBy: [],
    };
    console.log('itemObj created=', itemObj);
    // add new ItemObj to items stateVar
    const newItemsState = [...items, itemObj];
    setItems(newItemsState);
    const newDropDwnItems = [...dropDownItems, itemObj];
    setDropDownItems(newDropDwnItems);
    itemId += 1;
    itemNameInput.current.value = null;
    itemPriceInput.current.value = null;
  }
  return (
    <div className="container border border-danger py-3">
      <div className="row-l d-flex justify-content-center">
        <div className="col-auto">
          <div className="row">
            <div className="col-auto">
              <div>
                <input
                  ref={itemNameInput}
                  type="text"
                  placeholder="Item Name"
                  size="20"
                />
              </div>
              <br />
              <div className="row">
                <div className="col-3">
                  <input
                    ref={itemPriceInput}
                    type="number"
                    placeholder="0.00"
                    size="15"
/*                       onChange={setTwoNumberDecimal} */
                    min="0"
                    max="1000"
                    step="1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button
            type="button"
            onClick={addNewItem}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
