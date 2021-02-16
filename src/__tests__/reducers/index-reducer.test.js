import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import productListReducer from '../../reducers/product-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", ()=> {

  test ('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterProductList:{},
      formVisibleOnPage: false
    });
  });
  test('Check that inital state of produceListReducer matches root reducer', () => {
    expect(store.getState().masterProductList).toEqual(productListReducer(undefined, { type: null }));
  });
  test('Check that inital stae of formVisibleReducer match root reducer', ()=>{
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type:null}));
  });
});