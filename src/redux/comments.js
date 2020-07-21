import { COMMENTS } from '../shared/comments';

// all reducers take two parameters. previous(current) state and an action object 
export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        default:
            return state;
    }
} 