import { Reducer } from "redux";
import produce from 'immer';

import { ICartState } from "./types";

const initState: ICartState = {
  items: [],
  failureStockCheck: [],
};

export const cart: Reducer<ICartState> = (state = initState, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCESS': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => 
          item.product.id === product.id,
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        }
        else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        
        break;
      }
      case 'ADD_PRODUCT_TO_CART_FAILURE': {
        draft.failureStockCheck.push(action.payload.productId);
        
        break;
      }
      default: {
        return draft;
      }
    }
  });
}