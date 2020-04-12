import React from "react";

function ShoppingCartSummary(props) {
  return (
    <div className="my-4">
      <div>
        Number of items: <strong>{props.numberOfItems}</strong>
      </div>
      <div>
        Total: <strong>${props.totalToPay}</strong>
      </div>

      <button
        type="button"
        className="btn btn-outline-secondary btn-sm mt-3"
        onClick={props.onClear}
        disabled={props.numberOfItems === 0}
      >
        Clear shopping cart
      </button>
    </div>
  );
}

export default ShoppingCartSummary;
