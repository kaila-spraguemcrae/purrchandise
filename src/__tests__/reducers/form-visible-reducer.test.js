import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", ()=> {

  test('Should return default state if no action types is recognized', () => {
    expect(formVisibleReducer(false, { type: null})).toEqual(false);
  });
  test('Should toggle from visibility state to true', () => {
    expect(formVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
  });
});