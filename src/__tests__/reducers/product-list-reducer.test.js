import productListReducer from '../../reducers/product-list-reducer'

describe('productListReducer', () => {

  let action;
  const productData = {
    name: "Coffee Mug",
    category: "Drinkware",
    description: "a vessel for fluids",
    price: "10.00",
    quantity: 4,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', ()=>{
    expect(productListReducer({},{ type: null})).toEqual({});
  });
  

  test('Adding a product to our masterProductList', ()=>{
    const {name, category, description, quantity, price, id} = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      category: category,
      description: description,
      price: price,
      quantity: quantity,
      id: id
    }
    expect(productListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        category: category,
        description: description,
        price: price,
        quantity: quantity,
        id: id
      }
    })
  });

});