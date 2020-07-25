import * as ActionTypes from './ActionTypes';

// all reducers take two parameters. previous(current) state and an action object 
export const Promotions = (state = {isLoading: true, errMess:null, promotions:[]}, action) => {
    switch(action.type){
        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading:true, errMess: null }
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading:false, errMess:null, promotions: action.payload}
        default:
            return state;
    }
} 