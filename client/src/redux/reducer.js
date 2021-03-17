import { SET_USER } from './actionTypes';

export const initialState = {
  user: null
};

export function reducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
}
