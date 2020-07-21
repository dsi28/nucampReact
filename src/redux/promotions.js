import { PROMOTIONS } from '../shared/promotions';

// all reducers take two parameters. previous(current) state and an action object 
export const Promotions = (state = PROMOTIONS, action) => {
    switch(action.type){
        default:
            return state;
    }
} 