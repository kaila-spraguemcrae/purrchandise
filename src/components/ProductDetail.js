import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props){
  const { product, onClickingDelete } = props;
  return(
    <>
      <h1>Product Details</h1>
      <div className="container">
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>${product.price}</p>
        <p>{product.quantity} in stock.</p>
        <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
      </div>
    </>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ProductDetail;