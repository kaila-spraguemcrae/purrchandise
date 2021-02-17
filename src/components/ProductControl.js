import React from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import EditProductForm from './EditProductForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //formVisibleOnPage: false,
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        selectedProduct: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewProductToList = (newProduct) => { 
    const { dispatch } = this.props;
    const action = a.addProduct(newProduct);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.masterProductList[id];
    this.setState({selectedProduct: selectedProduct});
  }

  handleDeletingProduct = (id) => {
    const { dispatch } = this.props;
    const action ={
      type: 'DELETE_PRODUCT',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedProduct: null
    });
  }

  handleBuyProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.map((product)=> ({
      ...product, 
        quantity: product.id === id ? product.quantity -1 : product.quantity 
    }))
    this.setState({
      masterProductList: newMasterProductList,
      selectedProduct: null
    });
  }

  handleRestockProduct = (id, restockAmount) => {
    const newMasterProductList = this.state.masterProductList.map((product)=> ({
      ...product, 
        quantity: product.id === id ? parseInt(product.quantity) + parseInt(restockAmount) : product.quantity 
    }))
    this.setState({
      masterProductList: newMasterProductList,
      selectedProduct: null
    });
  }

  handleEditingProductInList = (productToEdit) => {
    const {dispatch} = this.props;
    const { name, category, description, price, quantity, id} = productToEdit;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      category: category,
      description: description,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedProduct: null
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = 
      <EditProductForm
        product = {this.state.selectedProduct}
        onEditProduct = {this.handleEditingProductInList} />
      buttonText = "Return to List";
    } else if (this.state.selectedProduct != null){
      currentlyVisibleState = 
      <ProductDetail 
        product = {this.state.selectedProduct} 
        onClickingDelete = {this.handleDeletingProduct}
        onClickingEdit = {this.handleEditClick}
        onClickingBuy = {this.handleBuyProduct}
        onClickingRestock = {this.handleRestockProduct}/>
      buttonText = "Return to Product List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation = {this.handleAddingNewProductToList} />;
      buttonText = "Return to product List";
    } else {
      currentlyVisibleState = <ProductList productList = {this.props.masterProductList} onProductSelection={this.handleChangingSelectedProduct} />;
      buttonText = "Add Product";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

ProductControl.propTypes = {
  masterProductList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;

