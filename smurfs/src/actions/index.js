import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURF});

    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            return dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: FETCH_FAILED, payload: err.res}));
}

export const addSmurf = smurf => dispatch => {
    dispatch({type: ADD_SMURF, payload: "New smurf moving into village"});
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => dispatch({type: ADD_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ADD_FAILED, payload: err}))
}