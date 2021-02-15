export default (state = {}, action) => {
  const {name, category, description, price, quantity, id } = action;
  switch(action.type){
    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          category: category,
          description: description,
          price: price,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_PRODUCT' :
      let newState = {...state};
      delete newState[id];
      return newState;

    default:
      return state;
  }
};