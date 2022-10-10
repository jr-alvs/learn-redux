import { createStore } from 'redux';
import { cart } from './modules/cart/reducer'

export const store = createStore(() => ({
  cart,
}));