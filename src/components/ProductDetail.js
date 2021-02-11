import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props){
  const { product, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let { stockMessage } = props;
  let numberInput = React.createRef();

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
          <button hidden={product.quantity===0} onClick={()=> onClickingBuy(product.id)}>Buy</button>
    
            <input ref={numberInput} type='number' name='restock' placeholder='Product restock quantity'/>
            <button onClick={()=> onClickingRestock(product.id, numberInput.current.value)}>Restock</button>

          <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
        </div>
      </>
    );
  }


ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ProductDetail;