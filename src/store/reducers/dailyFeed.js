import * as actionTypes from '../actions/actionTypes';

const initialState = {

  data: null,
  error: null,
  loading: false,
};

const DailyFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START_DAILY_FEED:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionTypes.FETCH_DAILY_FEED:
      return {
        ...state,
        error: null,
        loading: false,
        data: action.feed,

      };

    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        error: action.err,
        loading: false,
      };

    default: return state;
  }
};

export default DailyFeedReducer;
