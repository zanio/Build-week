import { factInstance } from '../../api/catInstance';
import * as actionTypes from './actionTypes';
import { getNextDay, randomizeFeed } from '../../helper/utility';

export const fetchStart = () => ({
  type: actionTypes.FETCH_START_DAILY_FEED,
});

export const fetchDailyFeed = (feed) => ({
  type: actionTypes.FETCH_DAILY_FEED,
  feed,
});
export const fetchManyFeed = (feed, counts) => ({
  type: actionTypes.FETCH_MANY_FEED,
  feed,
  counts,
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
  factInstance.get(query, {
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
      const stringExpiration = JSON.stringify(expiration);
      localStorage.setItem('feed', ParsePost);
      localStorage.setItem('expirationDate', stringExpiration);
      dispatch(fetchDailyFeed(newPost));
      dispatch(checkFeedTimeOut(expiration));
    })
    .catch((err) => {
      dispatch(FecthFail(err));
    });
};
export const FetchManyFeedAction = () => (dispatch) => {
  dispatch(fetchStart());
  const query = '/facts';
  factInstance.get(query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-key': process.env.API_KEY,
    },
  })
    .then((response) => {
      const feeds = response.data.all;
      const counts = response.data.all.length;
      dispatch(fetchManyFeed(feeds, counts));
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
      // console.log(expirationDate > new Date(), feedPost);
      dispatch(fetchDailyFeed(feedPost));
    }
    const nextExpiration = (expirationDate.getTime() - Math.ceil(new Date().getTime()));
    dispatch(checkFeedTimeOut(nextExpiration));
  }
};
