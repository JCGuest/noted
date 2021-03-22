import { SET_USER } from './types';

export const setUser = (email) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: {
      user: email
    }
  });
};
