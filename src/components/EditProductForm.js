import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditProductForm (props) {
  const firestore = useFirestore();
  // ?? const { product } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct();
    const propertiesToUpdate = {
      name: event.target.name.value,
      category: event.target.category.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,

    }
    return firestore.update({collection: 'products', doc: product.id}, propertiesToUpdate)
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditFormSubmission}
        buttonText = "Update Product" />
    </>
  );
}

EditProductForm.propTypes ={
  product: PropTypes.object,
  onEditProduct: PropTypes.func
}

export default EditProductForm;