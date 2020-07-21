import { CAMPSITES } from '../shared/campsites';

// all reducers take two parameters. previous(current) state and an action object 
export const Campsites = (state = CAMPSITES, action) => {
    switch(action.type){
        default:
            return state;
    }
} 