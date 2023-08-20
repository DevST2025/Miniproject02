/* eslint-disable no-case-declarations */
import { DECREASE, INCREASE, BUY, REMOVE } from "./constants";

//InitialState
export const initialState =
  JSON.parse(localStorage.getItem("productCart")) || [];

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY:
      if (state.length === 0) {
        const newItem = {
          ...action.payload.item,
          quantity: action.payload.quantity,
        };
        state = [...state, newItem];
      } else {
        if (checkCartExist(state, action.payload.item.productId)) {
          for (let i = 0; i < state.length; i++) {
            if (action.payload.item.productId === state[i].productId) {
              state[i].quantity += action.payload.quantity;
              break;
            }
          }
          state = [...state];
        } else {
          const newItem = {
            ...action.payload.item,
            quantity: action.payload.quantity,
          };
          state = [...state, newItem];
        }
      }
      localStorage.setItem("productCart", JSON.stringify(state));
      return state;
    case INCREASE:
      if (checkCartExist(state, action.payload)) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].productId === action.payload) {
            state[i].quantity++;
            break
          }
        }   
        state = [...state];
      }
      localStorage.setItem("productCart", JSON.stringify(state));
      return state;
    case DECREASE:
      if (checkCartExist(state, action.payload)) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].productId === action.payload) {

          state[i].quantity--;
          break
        }
      }
        state = [...state];
      }
      localStorage.setItem("productCart", JSON.stringify(state));
      return state;
    case REMOVE:
      const newData = state.filter((item) => item.productId !== action.payload);
      state = [...newData];
      localStorage.setItem("productCart", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;

const checkCartExist = (listCart, productId) => {
  for (let i = 0; i < listCart.length; i++) {
    if (listCart[i].productId === productId) {
      return true;
    }
  }
  return false;
};
