import React from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import EditProductForm from './EditProductForm';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewProductToList = (newProduct) => { const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({
      masterProductList: newMasterProductList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      masterProductList: newMasterProductList,
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
    const editedMasterProductList = this.state.masterProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      masterProductList: editedMasterProductList,
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation = {this.handleAddingNewProductToList} />;
      buttonText = "Return to product List";
    } else {
      currentlyVisibleState = <ProductList productList = {this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct} />;
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

export default ProductControl;

