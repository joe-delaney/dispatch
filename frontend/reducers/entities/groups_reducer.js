import {RECEIVE_GROUPS} from "../../actions/group_actions"

const groupsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        default:
            return state;
    }
}

export default groupsReducer;