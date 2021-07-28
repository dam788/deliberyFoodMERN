import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_ADD,
  PRODUCT_REMOVE,
  PRODUCT_EDIT,
} from './products-action';

const INITIAL_STATE = {
  foods: [],
  error: null,
  load: false,
  toEdit: {}
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
    case PRODUCT_ADD:
      return {
        ...state,
        foods: [...state.foods, payload],
      };
    case PRODUCT_REMOVE:
      return {
        ...state,
        foods: state.foods.filter((food) => food._id !== payload),
      };
    case PRODUCT_EDIT:
      return {
        ...state,
        toEdit: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
