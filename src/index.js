import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { ceateFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";

const store = createStore(rootReducer);

const rrfProps = {
  firebase, 
  config: {
      userProfile: "users"
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>  
  </Provider>,
  document.getElementById('root')
);
