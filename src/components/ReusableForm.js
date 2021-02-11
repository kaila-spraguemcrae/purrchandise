import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Product name'/>
        <br/>
        <input type='text' name='category' placeholder='Product category'/>
        <br/>
        <textarea name='description' placeholder='Product description'/>
        <br/>
        <input type='text' name='price' placeholder='Product price'/>
        <br/>
        <input type='number' name='quantity' placeholder='Product quantity'/>
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;