import * as actionTypes from '../actions/actionTypes';

const initialState = {

  breeds: null,
  error: null,
  loading: false,
  breedsCounts: null,
};

const BreedReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_BREED_FETCH:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionTypes.FETCH_MANY_BREED:
      return {
        ...state,
        error: null,
        loading: false,
        breeds: action.breed,
        breedsCounts: action.breedCounts,

      };

    case actionTypes.BREED_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default: return state;
  }
};

export default BreedReducers;
