import React from 'react';
// import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewProductForm(props){

  const firestore = useFirestore();

  function addProductToFirestore(event) {
    event.preventDefault();
    props.onNewProductCreation();

    return firestore.collection('products').add(
      {
        name: event.target.name.value, category: event.target.category.value, 
        description: event.target.description.value, 
        price: event.target.price.value, 
        quantity: event.target.quantity.value
      }
    );
  }
  
  return (
    <>
      <ReusableForm
        formSubmissionHandler={addProductToFirestore}
        buttonText="Submit!"/>
    </> 
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;