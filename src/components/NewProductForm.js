import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewProductForm(props){

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({name: event.target.name.value, category: event.target.category.value, description: event.target.description.value, price: event.target.price.value, quantity: event.target.quantity.value, id: v4()});
  }
  
  return (
    <>
      <form onSubmit={handleNewProductFormSubmission}>
        <input type='text' name='name' placeholder='Product Name' />
        <br/>
        <input type='text' name='category' placeholder='Category' />
        <br/>
        <textarea name='description' placeholder='Product Description' />
        <br/>
        <input type='text' name='price' placeholder='Price' />
        <br/>
        <input type='number' name='quantity' placeholder='Quantity' />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;