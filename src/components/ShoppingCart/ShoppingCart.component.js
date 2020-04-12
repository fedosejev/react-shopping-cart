import React, { useState, useEffect } from "react";
import {
  calculateTotalToPay,
  calculateTotalNumberOfItems,
} from "../../utils/business";
import { formatPrice } from "../../utils/ui";
import ShoppingCartSummary from "../ShoppingCartSummary/ShoppingCartSummary.component";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem.component";

function ShoppingCart(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props]);

  function updateItem(updatedItem) {
    const updatedItems = items
      .map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setItems(updatedItems);
  }

  function clearItems() {
    setItems([]);
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <h2>Shopping Cart</h2>
          <ShoppingCartSummary
            numberOfItems={calculateTotalNumberOfItems(items)}
            totalToPay={formatPrice(calculateTotalToPay(items))}
            onClear={clearItems}
          />
          {items.map((item) => (
            <ShoppingCartItem key={item.id} item={item} onChange={updateItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
