import React from 'react';
import ProductControl from "./ProductControl"
import Signin from "./Signin";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <span className="custom-nav">
        <Header />
      </span>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
      <div className='container'>
        <ProductControl />
      </div>
      </Switch>
    </Router>
  );
}

export default App;