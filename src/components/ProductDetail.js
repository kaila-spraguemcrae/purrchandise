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
        <div className="card">
          <div className="card-header">
            <h3>{product.name}</h3>
          </div>
          <div className="card-body">
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>${product.price}</p>
            <p>{stockMessage}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-secondary" hidden={product.quantity===0} onClick={()=> onClickingBuy(product.id)}>Buy</button>
      
            <input ref={numberInput} type='number' name='restock' placeholder='Product restock quantity'/>
            <button className="btn btn-secondary" onClick={()=> onClickingRestock(product.id, numberInput.current.value)}>Restock</button>
            
            <button className="btn btn-secondary" onClick={()=> onClickingDelete(product.id)}>Delete</button>
            <button className="btn btn-secondary" onClick={props.onClickingEdit}>Update</button>
          </div>
        </div>
      </>
    );
  }


ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ProductDetail;