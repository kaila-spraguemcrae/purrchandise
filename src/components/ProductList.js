import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function ProductList(props){

  // function handleDelete(id){
  //   props.productList.filter((product) => product.id !== id);
  //   console.log(props.productList);
  // }
  //delete according to product id. 
  return (
    <>
      {props.productList.map((product)=>
      <div>
        <Product name={product.name}
        category={product.category}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        key={product.id}  />
        {/* <button type="button" onClick={() => handleDelete(product.id)}>Delete</button> */}
      </div>
      )}
    </>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
};

export default ProductList;