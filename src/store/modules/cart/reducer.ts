import { Reducer } from "redux";
import { ICartState } from "./types";

const initState: ICartState = {
  items: []
};

export const cart: Reducer<ICartState> = (state, action) => {
  console.log(state, action);
  return initState;
}