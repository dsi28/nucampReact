// returns store
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';



    // Reducer, //imported from ./reducer.js when there was a single reduces file
    // initialState
    // combine 4 reducers since createStore only takes 1 reducer object
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}