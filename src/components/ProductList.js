import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function ProductList(props){

  useFirestoreConnect([
    { collection: 'products' }
  ]);

  const products = useSelector(state => state.firestore.ordered.products)

  if (isLoaded(products)){
    return (
      <>
        { products.map((product)=> {
          return <Product 
            whenProductClicked ={props.onProductSelection}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
            key={product.id}  />
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

ProductList.propTypes = {
  onProductSelected: PropTypes.func
};

export default ProductList;