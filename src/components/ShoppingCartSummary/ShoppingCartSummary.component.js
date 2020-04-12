import React from "react";
import Button from "../Button/Button.component";

function ShoppingCartSummary(props) {
  return (
    <div className="my-4">
      <div>
        Number of items: <strong>{props.numberOfItems}</strong>
      </div>
      <div>
        Total: <strong>${props.totalToPay}</strong>
      </div>

      <Button
        label="Clear shopping cart"
        onClick={props.onClear}
        isDisabled={props.numberOfItems === 0}
        className="mt-3"
      />
    </div>
  );
}

export default ShoppingCartSummary;
