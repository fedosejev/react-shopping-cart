import React, { useState } from "react";
import EditShoppingCartItem from "../EditShoppingCartItem/EditShoppingCartItem.component";

function calculateTotalPrice(item) {
  const total = item.price * item.quantity;

  return Math.round((total + Number.EPSILON) * 100) / 100;
}

function ShoppingCartItem(props) {
  const [isEditing, setIsEditing] = useState(false);

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  function onChange(item) {
    props.onChange(item);
    toggleEditing();
  }

  function removeItem() {
    const updatedItem = {
      ...props.item,
      quantity: 0,
    };

    props.onChange(updatedItem);
  }

  return (
    <div className="my-4">
      <h5>{props.item.name}</h5>

      {isEditing && (
        <EditShoppingCartItem
          item={props.item}
          onCancel={toggleEditing}
          onSaveQuantity={onChange}
        />
      )}

      {!isEditing && (
        <>
          <div>
            {props.item.quantity} x ${props.item.price} ={" "}
            <strong>${calculateTotalPrice(props.item)}</strong>
          </div>

          <div className="btn-group mt-2" role="group" aria-label="Change">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={toggleEditing}
            >
              Change quantity
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={removeItem}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCartItem;
