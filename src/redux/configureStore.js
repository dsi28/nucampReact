// returns store
import {createStore, combineReducers} from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';




export const ConfigureStore = () => {
    const store = createStore(
        // Reducer, //imported from ./reducer.js when there was a single reduces file
        // initialState

        // combine 4 reducers since createStore only takes 1 reducer object
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );
    return store;
}