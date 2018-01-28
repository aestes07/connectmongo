import { combineReducers } from 'redux';
import Products from './products-reducer';

const allReducers = combineReducers({
  products: Products,
});

export default allReducers;
