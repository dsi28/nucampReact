import * as ActionTypes from './ActionTypes';

// all reducers take two parameters. previous(current) state and an action object 
export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites:[]
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: [] }
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: null, campsites: action.payload }
        default:
            return state;
    }
} 