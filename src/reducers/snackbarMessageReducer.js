/* eslint-disable */
import { SHOW_SNACKBAR_MESSAGE } from "../actions";

const initialState = {
    key: 0,
    isShow: false,
    messageType: '',
    message: '',
    component: {},
    persist: false,
    position: {
        vertical: 'bottom',
        horizontal: 'right',
    }

};

const snackbarMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SNACKBAR_MESSAGE: {
            return {
                ...state
                , key: action.key
                , isShow: action.isShow
                , messageType: action.messageType
                , message: action.message
                , innerMessage: action.innerMessage
                , component: action.component
                , persist: action.persist
                , position: { ...action.position }
            };
        }
        default:
            return state;
    }
};

export default snackbarMessageReducer;