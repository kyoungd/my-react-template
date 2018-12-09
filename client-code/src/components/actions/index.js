import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from 'components/actions/types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    dispatch({type: AUTH_ERROR, payload: 'loading...'});
    const response = await axios.post('http://localhost:3090/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (err) {
    dispatch({type: AUTH_ERROR, payload: 'error while signing up'})
  }
}

// no react-thunk needed.  not async function
export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    dispatch({type: AUTH_ERROR, payload: 'loading...'});
    const response = await axios.post('http://localhost:3090/signin', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (err) {
    dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'});
  }
}

