export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find((ci) => ci.id === item.id);

  if (existingCartItem) {
    return cartItems.map((ci) => {
      return ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  const existingCartItem = cartItems.find((i) => i.id === item.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((i) => i.id !== item.id);
  }

  return cartItems.map((i) =>
    i.id === item.id ? { ...i, quantity: i.quantity-- } : i
  );
};
