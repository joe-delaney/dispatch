import { TOGGLE_CHANNEL_DETAILS_MODAL, TOGGLE_EDIT_MODAL, TOGGLE_CREATE_CHANNEL_MODAL, TOGGLE_GROUP_DETAILS_MODAL } from "../../actions/modal_actions";

const initialState = {
    editModalDisplayed: false,
    channelDetailsModalDisplayed: false,
    createChannelModalDisplayed: false,
    groupDetailsModalDisplayed: false
}

const modalsReducer = (state = initialState, action) => {
    Object.freeze({}, state);
    let nextState;
    switch(action.type) {
        case TOGGLE_EDIT_MODAL:
            nextState = Object.assign({}, state);
            nextState.editModalDisplayed = !nextState.editModalDisplayed;
            return nextState;
        case TOGGLE_CHANNEL_DETAILS_MODAL:
            nextState = Object.assign({}, state);
            nextState.channelDetailsModalDisplayed = !nextState.channelDetailsModalDisplayed;
            return nextState;
        case TOGGLE_GROUP_DETAILS_MODAL:
            nextState = Object.assign({}, state);
            nextState.groupDetailsModalDisplayed = !nextState.groupDetailsModalDisplayed;
            return nextState;
        case TOGGLE_CREATE_CHANNEL_MODAL:
            nextState = Object.assign({}, state);
            nextState.createChannelModalDisplayed = !nextState.createChannelModalDisplayed;
            return nextState;
        default: 
            return state;
    }
}

export default modalsReducer;