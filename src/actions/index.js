import * as c from './../actions/ActionTypes'

export const deleteProduct = id => ({
  type: c.DELETE_PRODUCT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
