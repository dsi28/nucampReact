import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';
    import { actionTypes } from 'react-redux-form';

// all reducers take two parameters. previous(current) state and an action object 
export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment); // adds item to the end of array and returns new array. does not mutate current array/state
        default:
            return state;
    }
} 