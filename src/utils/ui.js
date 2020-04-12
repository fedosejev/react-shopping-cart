function formatPrice(price) {
  return price.toFixed(2);
}

function concatenateClassNames({ baseClassName, customClassName }) {
  if (customClassName) {
    return `${baseClassName} ${customClassName}`;
  }

  return baseClassName;
}

export { formatPrice, concatenateClassNames };
