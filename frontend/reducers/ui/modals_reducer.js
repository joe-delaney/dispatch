import { TOGGLE_CHANNEL_DETAILS_MODAL, TOGGLE_EDIT_MODAL } from "../../actions/modal_actions";

const initialState = {
    editModalDisplayed: false,
    channelDetailsModalDisplayed: false
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
        default: 
            return state;
    }
}

export default modalsReducer;