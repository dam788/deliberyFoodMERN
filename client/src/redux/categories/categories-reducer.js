import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from './categories-action';

const INITIAL_STATE = {
  categories: [],
  error: null,
  load: false,
};

const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        load: true,
      };

    case CATEGORIES_SUCCESS:
      return {
        ...state,
        load: false,
        categories: [...payload],
      };

    case CATEGORIES_FAIL:
      return {
        ...state,
        load: false,
        categories: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
