import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';
import { Campsites } from './campsites';

export const addComment = (campsiteId, rating, author, text) =>({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        campsiteId,
        rating,
        author,
        text
    }
});

// do not understand the nested function here. need to researcht this. is it because of 2 function calls are made?
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(()=>{
        dispatch(addCampsites(CAMPSITES));
    }, 2000);

}

// when to use () around the {} and when not to
export const campsitesLoading = () =>({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});