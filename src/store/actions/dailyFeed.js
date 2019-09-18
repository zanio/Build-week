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
      const expiration = new Date(getNextDay());
      const newPost = randomizeFeed(response.data.all);
      const ParsePost = JSON.stringify(newPost);
      const ParseExpiration = JSON.stringify(expiration);
      localStorage.setItem('feed', ParsePost);
      localStorage.setItem('expirationDate', ParseExpiration);
      dispatch(fetchDailyFeed(newPost));
      dispatch(checkFeedTimeOut(expiration));
    })
    .catch((err) => {
      dispatch(FecthFail(err));
    });
};

export const feedCheckState = () => (dispatch) => {
  const feed = JSON.parse(localStorage.getItem('feed'));
  if (!feed) {
    dispatch(FetchDailyFeedAction());
  } else {
    const expirationDate = new Date(JSON.parse(localStorage.getItem('expirationDate')));
    if (expirationDate > new Date()) {
      const feedPost = JSON.parse(localStorage.getItem('feed'));
      console.log(expirationDate > new Date(), feedPost);
      dispatch(fetchDailyFeed(feedPost));
    }
    console.log(expirationDate.getTime() - new Date().getTime());

    dispatch(checkFeedTimeOut(expirationDate.getTime() - new Date().getTime()));
  }
};
