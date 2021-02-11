import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

function ProductDetail(props){
  const { product, onClickingDelete, onClickingBuy } = props;
  let {stockMessage } = props;
    if(product.quantity === 0){
      stockMessage = "Currently Out of Stock.";
    } else {
      stockMessage = product.quantity + " in Stock";
    }
  
    return(
      <>
        <h1>Product Details</h1>
        <div className="container">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>${product.price}</p>
          <p>{stockMessage}</p>
          <button hidden={product.quantity===0}onClick={()=> onClickingBuy(product.id)}>Buy</button>
          <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
        </div>
      </>
    );
  }


ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default ProductDetail;