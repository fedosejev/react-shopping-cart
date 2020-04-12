import React, { useState, useEffect } from "react";
import { calculateTotalPrice } from "../../utils/business";
import { formatPrice } from "../../utils/ui";
import Button from "../Button/Button.component";

function ShoppingCartEditItem(props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.item.quantity);
  }, [props]);

  function saveQuantity() {
    props.onSaveQuantity({
      ...props.item,
      quantity,
    });
  }

  function addOne() {
    setQuantity(quantity + 1);
  }

  function removeOne() {
    setQuantity(quantity - 1);
  }

  return (
    <div>
      <div className="text-left">
        Price: $
        {formatPrice(
          calculateTotalPrice({ price: props.item.price, quantity })
        )}
      </div>

      <form
        className="form-inline mt-2"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="text"
          className="form-control form-control-sm ml-2"
          id="quantity"
          value={quantity}
          onChange={(event) => {
            setQuantity(Number(event.target.value));
          }}
        />

        <div className="btn-group ml-2" role="group" aria-label="Basic example">
          <Button label="Add one" onClick={addOne} />
          <Button
            label="Remove one"
            onClick={removeOne}
            isDisabled={quantity === 0}
          />
        </div>

        <div className="btn-group ml-2" role="group" aria-label="Basic example">
          <Button
            label="Save"
            onClick={saveQuantity}
            isDisabled={quantity === props.item.quantity}
          />
          <Button label="Cancel" onClick={props.onCancel} />
        </div>
      </form>
    </div>
  );
}

export default ShoppingCartEditItem;
