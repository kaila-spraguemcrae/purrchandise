import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function ProductList(props){
  return (
    <>
      <hr />
      {props.productList.map((product, index)=>
        <Product name={product.name}
        category={product.category}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        key={index} />
      )}
    </>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
};

export default ProductList;