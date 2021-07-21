import axios from 'axios';

const ENDPOINT_CATEGORIES = '/api/categories/';
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAIL = 'CATEGORIES_FAIL';
export const CATEGORIES_ADD = 'CATEGORIES_ADD';

export const categoriesRequest = () => {
  return {
    type: CATEGORIES_REQUEST,
  };
};

export const categoriesSuccess = (data) => {
  return {
    type: CATEGORIES_SUCCESS,
    payload: data,
  };
};

export const categoriesFail = (error) => {
  return {
    type: CATEGORIES_FAIL,
    payload: error,
  };
};

const categorytAdd = (category) => {
  return{
      type: CATEGORIES_ADD,
      payload: category,
  }
}


export const fetchCategories = () => async (dispatch) => {
  dispatch(categoriesRequest());
  try {
    const { data } = await axios.get(ENDPOINT_CATEGORIES);

    dispatch(categoriesSuccess(data));
  } catch (error) {
    dispatch(categoriesFail(`${error}`));
  }
};

// agrega a la collection de categories un producto
export const addCategoriesToDB = (category) => { 
  return async(dispatch) => {
    try {
      const {data} = await axios.post(ENDPOINT_CATEGORIES, category);
      dispatch(categorytAdd(data));
    } catch (error) {
      dispatch(categoriesFail(`${error}`));     
    }
  }
}