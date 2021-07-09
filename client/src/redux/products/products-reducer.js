// import { Foods } from '../../data/data';
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
} from './products-action';

const INITIAL_STATE = {
  foods: [],
  error: null,
  load: false,
};

const productsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST:
      return {
        ...state,
        load: true,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        load: false,
        foods: [...payload],
      };
    case PRODUCTS_FAIL:
      return {
        ...state,
        load: false,
        foods: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
