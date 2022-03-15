export const procedureToUpdateIncrementInCart = (user_cart, id) => {
  const cartData = user_cart.filter((e) => e.selectedVarientId === id)[0];
  cartData.quantity = ++cartData.quantity;
  cartData.total_price = cartData.product_price * cartData.quantity;
  return cartData;
};

export const procedureToUpdateDecrementInCart = (user_cart, id) => {
  const cartData = user_cart.filter((e) => e.selectedVarientId === id)[0];
  cartData.quantity = --cartData.quantity;
  const deductedQuantity = cartData.quantity;
  const amountDeducted = cartData.product_price * deductedQuantity;
  cartData.total_price = amountDeducted;
  return cartData;
};
