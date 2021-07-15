import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } from './cart-action';
import { addItemToCart, removeItemsToCart } from './cart-utils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

function cartReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      // console.log(state.cartItems);
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
}

export default cartReducer;
