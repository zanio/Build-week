import * as actionTypes from '../actions/actionTypes';

const initialState = {

  Feeds: null,
  error: null,
  loading: false,
  counts: null,
};

const ManyFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START_DAILY_FEED:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionTypes.FETCH_MANY_FEED:
      return {
        ...state,
        error: null,
        loading: false,
        Feeds: action.feed,
        counts: action.counts,

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

export default ManyFeedReducer;
