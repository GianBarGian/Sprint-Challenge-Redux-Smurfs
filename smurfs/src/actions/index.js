import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const SPINNER_ON = "SPINNER_ON";
export const SPINNER_OFF = "SPINNER_OFF";
export const ERROR = "ERROR";

export const getSmurfs = () => dispatch => {
  dispatch({ type: SPINNER_ON });
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    })
  dispatch({ type: SPINNER_OFF });
}