import catAxios from '../../api/catInstance';
import * as actionTypes from './actionTypes';

export const fetchStart = () => ({
  type: actionTypes.FETCH_START_DAILY_FEED,
});

export const fetchDailyFeed = (feed) => ({
  type: actionTypes.FETCH_DAILY_FEED,
  feed,
});

export const FecthFail = (err) => ({
  type: actionTypes.FETCH_FAIL,
  err,
});

export const FetchDailyFeedAction = () => (dispatch) => {
  dispatch(fetchStart());
  const query = 'breeds?limit=10';
  catAxios.get(query)
    .then((response) => {
      console.log(response.data.data)
      dispatch(fetchDailyFeed(response.data.data));
    })
    .catch((err) => {
      dispatch(FecthFail(err));
    });
};
