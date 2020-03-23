import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchPeople = () => dispatch => {
    dispatch({type: FETCH_PEOPLE});
    axios.get('http://localhost:4000/people')
        .then(res => {
            console.log("Response", res)
            return dispatch({type: FETCH_SUCCESS, payload: res.data});
        })
        .catch(err => dispatch({type: FETCH_ERROR, payload: err.error}));
}


export const ADD_PEOPLE = 'ADD_PEOPLE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';


export const addPerson = person => dispatch => {
    dispatch({type: ADD_PEOPLE})
    axios.post('http://localhost:4000/people', person)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("add error:", err)
            dispatch({type: ADD_ERROR, payload: err.error})
        })
    };