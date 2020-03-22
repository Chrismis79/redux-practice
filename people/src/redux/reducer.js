import {FETCH_PEOPLE, FETCH_SUCCESS, FETCH_ERROR, ADD_PEOPLE, ADD_SUCCESS, ADD_ERROR} from './actions';

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
                people: [],
                isFetching: true,
                isAdding: false,
                error: null
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                people: action.payload,
                isFetching: false,
                isAdding: false,
                error: null
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ADD_PEOPLE: 
            return {
                ...state,
                isAdding: true,
                isFetching: false,
                people: action.payload
            }
        case ADD_SUCCESS: 
            return {
                ...state,
                isAdding: false,
                isFetching: false,
                people: [...state.people, action.payload],
            }
        case ADD_ERROR: 
            return {
                ...state,
                error: action.payload,
            }
        default: 
            return state;
    }
}