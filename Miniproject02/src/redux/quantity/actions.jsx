import { DECREASE, INCREASE, BUY, REMOVE } from "./constants";

export const increase = (id) => ({
    type : INCREASE,
    payload: id
})

export const decrease = (id) => ({
    type : DECREASE,
    payload: id
})

export const buyProduct = (quantity, item) => ({
    type : BUY,
    payload: {quantity, item}
})

export const removeProduct = (id) => ({
    type : REMOVE,
    payload: id
})