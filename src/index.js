import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';

const preloadedstate = { products: [{}] };

const store = createStore(
  allReducers,
  preloadedstate,
  composeWithDevTools(
      applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
