import {FETCH_PEOPLE, FETCH_SUCCESS, FETCH_ERROR} from './actions';

const initialState = {
    people: [],
    isFetching: false,
    isAdding: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PEOPLE:
            return { 
                ...state,
                isFetching: true,
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                people: action.payload,
                isFetching: false,
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}