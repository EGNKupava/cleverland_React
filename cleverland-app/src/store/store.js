import { createStore, combineReducers } from 'redux';

import { weatherPageReduer } from './weather-reducer';
import { productPageReducer } from './product-reducer'

let reducers = combineReducers({
  productPage: productPageReducer,
  weatherPage: weatherPageReduer,
});

export const store = createStore(reducers);