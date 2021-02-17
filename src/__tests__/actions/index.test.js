import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes'

describe('help queue actions', ()=>{

  it('deleteProduct should create DELETE_PRODUCT action', ()=>{
    expect(actions.deleteProduct(1)).toEqual({
      type: c.DELETE_PRODUCT,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', ()=>{
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addProduct should create ADD_PRODUCT action', ()=> {
    expect(actions.addProduct({name: "Coffee Mug", category: "Drinkware", description: "a vessel for fluids", price: "10.00", quantity: 4, id: 1})).toEqual({
      type: c.ADD_PRODUCT,
      name: "Coffee Mug",
      category: "Drinkware",
      description: "a vessel for fluids",
      price: "10.00",
      quantity: 4,
      id: 1
    });
  });
});