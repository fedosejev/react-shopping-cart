import React, { useState } from "react";
import { calculateTotalPrice } from "../../utils";
import Button from "../Button/Button.component";
import ShoppingCartEditItem from "../ShoppingCartEditItem/ShoppingCartEditItem.component";

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
        <ShoppingCartEditItem
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
            <Button label="Change quantity" onClick={toggleEditing} />
            <Button label="Remove" onClick={removeItem} />
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCartItem;
