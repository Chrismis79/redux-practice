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
        case ADD_PEOPLE: 
            return {
                ...state,
                isAdding: true,
                people: action.payload
            }
        case ADD_SUCCESS: 
            return {
                ...state,
                isAdding: false,
                people: action.payload,
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