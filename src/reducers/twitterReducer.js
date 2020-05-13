import * as Constants from '../actions/twitterAction';

const initialState = {
    twitList: null,
    twitResponse: null,
};

export const twitterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.SET_TWEETS_LIST:
            return { ...state, twitList: action.response };
        case Constants.SET_TWEETS_BYTAG_SEARCH:
            return { ...state, twitResponse: action.response };
        default:
            return state;
    }
}

