import { Reducer } from "redux";
import { ICartState } from "./types";

const initState: ICartState = {
  items: []
};

export const cart: Reducer<ICartState> = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      state.items.push({
        product,
        quantity: 1,
      });

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
}