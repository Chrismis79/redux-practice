import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchPeople = () => dispatch => {
    dispatch({type: FETCH_PEOPLE});
    axios.get('http:localhost:4000/people')
        .then(res => {
            console.log("Response", res)
            return dispatch({type: FETCH_SUCCESS, payload: res.data});
        })
        .catch(err => dispatch({type: FETCH_ERROR, payload: err.res}));
}


