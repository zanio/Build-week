import catAxios from '../../api/catInstance';
import * as actionTypes from './actionTypes';
import { getNextDay, randomizeFeed } from '../utility';

export const fetchStart = () => ({
  type: actionTypes.FETCH_START_DAILY_FEED,
});

export const fetchDailyFeed = (feed) => ({
  type: actionTypes.FETCH_DAILY_FEED,
  feed,
});

export const clearFeed = () => {
  localStorage.removeItem('feed');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.CLEAR_DAILY_FEED,
  };
};


export const setNextFeed = (feed, expirationDate) => {
  localStorage.setItem('feed', feed);
  localStorage.setItem('expirationDate', expirationDate);
  return {
    type: actionTypes.SET_NEXT_FEED,
  };
};

export const checkFeedTimeOut = (expirationTime) => (dispatch) => {
  setTimeout(() => {
    dispatch(clearFeed());
  }, expirationTime * 1000);
};

export const FecthFail = (err) => ({
  type: actionTypes.FETCH_FAIL,
  err,
});

export const FetchDailyFeedAction = () => (dispatch) => {
  dispatch(fetchStart());
  const query = '/facts';
  catAxios.get(query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-key': process.env.API_KEY,
    },
  })
    .then((response) => {
      const expiration = new Date(new Date().getTime() + getNextDay);
      const newPost = randomizeFeed(response.data.data)
      dispatch(setNextFeed(newPost, expiration));
      dispatch(fetchDailyFeed(newPost));
      dispatch(checkFeedTimeOut(getNextDay));
    })
    .catch((err) => {
      dispatch(FecthFail(err));
    });
};

export const feedCheckState = () => (dispatch) => {
  const feed = localStorage.getItem('feed');
  if (!feed) {
    dispatch(FetchDailyFeedAction());
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate > new Date()) {
      const feedPost = localStorage.getItem('feed');
      dispatch(fetchDailyFeed(feedPost));
    }

    dispatch(checkFeedTimeOut(expirationDate.getTime() - new Date().getTime() / 1000));
  }
};
