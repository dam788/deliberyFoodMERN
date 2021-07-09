import { arraySections } from '../../data/data';

const INITIAL_STATE = {
  foods: arraySections,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
