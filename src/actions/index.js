import * as c from './../actions/ActionTypes'

export const deleteProduct = id => ({
  type: c.DELETE_PRODUCT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addProduct = (product) => {
  const { name, category, description, price, quantity, id } = product;
  return {
    type: c.ADD_PRODUCT,
    name,
    category,
    description,
    price,
    quantity,
    id
  }
}