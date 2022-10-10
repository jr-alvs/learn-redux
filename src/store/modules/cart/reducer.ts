import { Reducer } from "redux";
import { ICartState } from "./types";

const initState: ICartState = {
  items: [],
}

export const cart: Reducer<ICartState> = () => {
  return initState;
}