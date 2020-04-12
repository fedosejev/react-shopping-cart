function calculateTotalPrice(item) {
  const total = item.price * item.quantity;

  return Math.round((total + Number.EPSILON) * 100) / 100;
}

function calculateTotalToPay(items) {
  const total = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return Math.round((total + Number.EPSILON) * 100) / 100;
}

function calculateTotalNumberOfItems(items) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export {
  calculateTotalPrice,
  calculateTotalToPay,
  calculateTotalNumberOfItems,
};
