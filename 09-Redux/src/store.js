import { createStore } from "redux";
// Reducer
const initialState = 0;
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IN":
      return state + 1;
    case "DEC":
      return state - 1;

    default:
      return state;
  }
};

export const mystore = createStore(CounterReducer);
