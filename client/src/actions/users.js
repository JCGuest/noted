import { v4 as uuidv4 } from 'uuid';
import { SET_USER } from './types';

export const setUser = ((msg, alertType) = (dispatch) => {
  console.log();
  const id = uuidv4();
  dispatch({
    type: SET_USER,
    paylaod: msg,
    alertType,
    id
  });
});
