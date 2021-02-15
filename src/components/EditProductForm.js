import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm (props) {
  const { product } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      category: event.target.category.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: product.id 
    });
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