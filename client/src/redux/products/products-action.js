import axios from 'axios';

const ENDPOINT_PRODUCTS = '/api/products/';
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAIL = 'PRODUCTS_FAIL';
export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_REMOVE = 'PRODUCT_REMOVE';


// levanta la db collection  de products
const productsRequest = () => {
  return {
    type: PRODUCTS_REQUEST,
  };
};

const productsSuccess = (data) => {
  return {
    type: PRODUCTS_SUCCESS,
    payload: data,
  };
};

const productsFail = (error) => {
  return {
    type: PRODUCTS_FAIL,
    payload: error,
  };
};

const productAdd = (product) => {
  return{
      type: PRODUCT_ADD,
      payload: product,
  }
}

const productDelete = (product) => {
  return{
      type: PRODUCT_REMOVE,
      payload: product,
  }
}

// encargada de ejecutar la base de datos...
export const fetchProducts = () => async (dispatch) => {
  dispatch(productsRequest());
  
  try {
    const { data } = await axios.get(ENDPOINT_PRODUCTS);
    
    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFail(`${error}`));
  }
};

// agrega a la collection de products un producto
export const addProductToDB = (product) => { 
  return async(dispatch) => {
    try {
      const {data} = await axios.post(ENDPOINT_PRODUCTS, product);
      dispatch(productAdd(data))
    } catch (error) {
      dispatch(productsFail(`${error}`));     
    }
  }
}

// borra a la collection de products un producto
export const deleteProductToDB = (product) => { 
  return async(dispatch) => {
    try {
      const {data} = await axios.delete(`${ENDPOINT_PRODUCTS}:${product._id}`);
      dispatch(productDelete(data))
    } catch (error) {
      dispatch(productsFail(`${error}`));         
    }
  }
}