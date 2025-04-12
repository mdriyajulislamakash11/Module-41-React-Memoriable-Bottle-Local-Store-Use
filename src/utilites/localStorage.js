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

export {addToLS, getStoreCart}