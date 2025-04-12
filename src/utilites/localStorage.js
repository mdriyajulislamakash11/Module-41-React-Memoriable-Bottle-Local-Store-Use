const getStoreCart = () => {
  const storeCartString = localStorage.getItem("cart");
  if (storeCartString) {
    return JSON.parse(storeCartString);
  }
  return [];
};

const saveCartToLs = (cart) => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const addToLS = (id) => {
  const cart = getStoreCart();
  cart.push(id);
  // save to local Storage
  saveCartToLs(cart);
};

const removeFromLS = (id) => {
  const cart = getStoreCart();
  // removinf every id
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLs(remaining);
};

export { addToLS, getStoreCart, removeFromLS };
