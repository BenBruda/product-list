export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

function addProduct(product) {
  return {
    type: ADD_NEW_PRODUCT,
    product
  };
}
function removeProduct(index) {
  return {
    type: REMOVE_PRODUCT,
    index
  };
}

export { addProduct, removeProduct };
