import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../actions/session_actions";

const _nullState = {
    currentUserId: null
}

const sessionReducer = (state = _nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let nextState = Object.assign({}, state);
            nextState["currentUserId"] = action.currentUser.id;
            return nextState;
        case REMOVE_CURRENT_USER:
            return _nullState;
        default:
            return state;
    }
}

export default sessionReducer;