import axios from 'axios';

const ENDPOINT_PRODUCTS = '/api/products';
export const PRODUCTS_REQUEST = 'FETCH_MENU_REQUEST';
export const PRODUCTS_SUCCESS = 'FETCH_MENU_SUCCESS';
export const PRODUCTS_FAIL = 'FETCH_MENU_FAILURE';

export const productsRequest = () => {
  return {
    type: PRODUCTS_REQUEST,
  };
};

export const productsSuccess = (data) => {
  return {
    type: PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const productsFail = (error) => {
  return {
    type: PRODUCTS_FAIL,
    payload: error,
  };
};

export const fetchProducts = () => async (dispatch) => {
  dispatch(productsRequest());
  try {
    const { data } = await axios.get(ENDPOINT_PRODUCTS);

    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFail(`${error}`));
    console.log(error);
  }
};
