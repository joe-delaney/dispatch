import { TOGGLE_EDIT_MODAL } from "../../actions/modal_actions";

const initialState = {
    editModalDisplayed: false
}

const modalsReducer = (state = initialState, action) => {
    Object.freeze({}, state);
    let nextState;
    switch(action.type) {
        case TOGGLE_EDIT_MODAL:
            nextState = Object.assign({}, state);
            nextState.editModalDisplayed = !nextState.editModalDisplayed;
            return nextState;
        default: 
            return state;
    }
}

export default modalsReducer;