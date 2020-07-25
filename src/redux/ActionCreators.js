import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';
import {baseUrl} from '../shared/baseUrl';
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

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if(response.ok){
                    return response;
                } else{
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }   
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
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

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response =>{
            if(response.ok){
                return response
            }else{
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = errMess => ({
    type:ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromotions = () => dispatch =>{
    dispatch(campsitesLoading());
    return fetch(baseUrl + 'promotions')
        .then(response =>{
            if(response.ok){
                return response;
            }else{
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error=>{
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
}

export const addPromotions = promotions =>({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});

export const promotionsFailed = errMess =>({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});