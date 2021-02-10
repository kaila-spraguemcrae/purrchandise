import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <>
      <div className="card">
        <div className="container">
          <h3>{props.name}</h3>
          <p>Category: {props.category}</p>
          <p>Description: {props.description}</p>
          <p>{props.price}</p>
          <p>{props.quantity} in stock.</p>
        </div>
      </div>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Product;