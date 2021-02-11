import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewProductForm(props){

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({name: event.target.name.value, category: event.target.category.value, description: event.target.description.value, price: event.target.price.value, quantity: event.target.quantity.value, id: v4()});
  }
  
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Submit!"/>
    </> 
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;