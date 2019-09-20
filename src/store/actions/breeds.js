import { breedInstance } from '../../api/catInstance';
import * as actionTypes from './actionTypes';
import { getNextDay, randomizeFeed } from '../../helper/utility';

export const fetchStart = () => ({
  type: actionTypes.START_BREED_FETCH,
});

export const ABreed = (breed) => ({
  type: actionTypes.BREED_FETCH,
  breed,
});
export const ManyBreed = (breed, breedCounts) => ({
  type: actionTypes.FETCH_MANY_BREED,
  breed,
  breedCounts,
});

/**
 *
 * @param {error} error during fetching of breed.
 * @returns {object} An error object is returned.
 */
export const FectchFailBreed = (error) => ({
  type: actionTypes.BREED_FAIL,
  error,
});

export const FetchManyBreed = () => (dispatch) => {
  dispatch(fetchStart());
  const query = '/?limit=60';
  breedInstance.get(query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CAT_API_KEY,
    },
  })
    .then((response) => {
      const itemCounts = response.headers['pagination-limit'];
      const breeds = response.data;
      dispatch(ManyBreed(breeds, itemCounts));
    })
    .catch((err) => {
      dispatch(FectchFailBreed(err));
    });
};
