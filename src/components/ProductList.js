import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function ProductList(props){

  return (
    <>
      {Object.values(props.productList).map((product)=>
      <div>
        <Product 
        whenProductClicked ={props.onProductSelection}
        name={product.name}
        category={product.category}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        id={product.id}
        key={product.id}  />
      </div>
      )}
    </>
  );
}

ProductList.propTypes = {
  productList: PropTypes.object,
  onProductSelected: PropTypes.func
};

export default ProductList;