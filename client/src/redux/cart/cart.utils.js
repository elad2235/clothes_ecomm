export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find((ci) => ci.id === item.id);

  if (existingCartItem) {
    return cartItems.map((ci) => {
      return ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};
