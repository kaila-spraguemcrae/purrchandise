export const deleteProduct = id => ({
  type: 'DELETE_PRODUCT',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addProduct = (product) => {
  const { name, category, description, price, quantity, id } = product;
  return {
    type: 'ADD_PRODUCT',
    name,
    category,
    description,
    price,
    quantity,
    id
  }
}