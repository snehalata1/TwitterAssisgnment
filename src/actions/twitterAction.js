/* eslint-disable */
import apis from '../config/apis';
import { API } from './index';

export const SET_TWEETS_BYTAG_SEARCH = 'app/Patient/SET_TWEETS_BYTAG_SEARCH';
export const SET_TWEETS_LIST = 'app/Twitter/SET_TWEETS_LIST';

export const fetchTweetsList = (callback) => {
    const options = {
        method: 'GET',
    }
    return {
        type: API,
        meta: {
            options,
            url: apis.getTweetsList,
            callback,
        },
    };
}

export const setTweetsList = (response) => {
    return {
        type: SET_TWEETS_LIST,
        response
    };
}

export const fetchTweetsByTagSearch = (data, callback) => {
    const options = {
        method: 'GET',
    }
    return {
        type: API,
        meta: {
            options,
            url: apis.getTweetsByTagSearch + data,
            callback,
        },
    };
}

export const setTweetsByTagSearch = (response) => {
    return {
        type: SET_TWEETS_BYTAG_SEARCH,
        response
    };
}



