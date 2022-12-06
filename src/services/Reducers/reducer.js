import { Add_To_Cart } from "../constants";
import { Remove_To_Cart } from "../constants";

const initailState = {
    cartData: []
}

export default function cartItems(state = [], action) {
    switch (action.type) {
        case Add_To_Cart:
            // console.log("reducer", action);
            return [
                ...state,
                { cartData: action.data }
            ]
        case Remove_To_Cart:
            // console.log("reducer", action);
            state.pop();
            return [
                ...state
            ]
        default:
            return state
    }
}