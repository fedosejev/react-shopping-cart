import React, { useState, useEffect } from "react";

function EditShoppingCartItem(props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.item.quantity);
  }, [props]);

  function calculateTotalPrice({ price, quantity }) {
    const total = price * quantity;

    return Math.round((total + Number.EPSILON) * 100) / 100;
  }

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
        Price: ${calculateTotalPrice({ price: props.item.price, quantity })}
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
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={addOne}
          >
            Add one
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={removeOne}
            disabled={quantity === 0}
          >
            Remove one
          </button>
        </div>

        <div className="btn-group ml-2" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={saveQuantity}
            disabled={quantity === props.item.quantity}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditShoppingCartItem;
