import * as ActionTypes from './ActionTypes';
    import { actionTypes } from 'react-redux-form';

// all reducers take two parameters. previous(current) state and an action object 
export const Comments = (state = {errMess:null, comments:[]}, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess:null,comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, errMess:null, comments: state.comments.concat(comment)}; // adds item to the end of array and returns new array. does not mutate current array/state
        default:
            return state;
    }
} 