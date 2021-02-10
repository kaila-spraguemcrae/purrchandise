import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <>
      <div className="card" onClick= {() => props.whenProductClicked(props.id)}>
        <div className="container">
          <h3>{props.name}</h3>
          <p>${props.price}</p>
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
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Product;