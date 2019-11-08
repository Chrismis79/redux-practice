import { FETCH_SMURF, FETCH_SUCCESS, FETCH_FAILED, ADD_SMURF, ADD_SUCCESS, ADD_FAILED} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF:
            return {...state, isFetching: true, error: null};
        case FETCH_SUCCESS:
            return {...state, isFetching: false, error: null, smurfs: action.payload};
        case FETCH_FAILED:
            return {...state, isFetching: false, error: action.payload};
        case ADD_SMURF:
            return {...state, error: null, isAdding: true, smurfs: action.payload};
        case ADD_SUCCESS:
            return {...state, isAdding: false, smurfs: action.payload, error: null};
        case ADD_FAILED:
            return {...state, error: action.payload, isAdding: false};
        default:
            return state;  
    }
};