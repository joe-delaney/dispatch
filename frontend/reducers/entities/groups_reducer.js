import {RECEIVE_GROUPS, RECEIVE_INFO} from "../../actions/group_actions"

const groupsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_INFO:
            if (action.info.group) {
                let name = "";
                let flag = false;
                if(nextState[action.info.group.id]) {
                    flag = true;
                    name = nextState[action.info.group.id].name;
                }
                nextState[action.info.group.id] = action.info.group;
                if(flag) nextState[action.info.group.id].name = name;
            }
            return nextState;
        default:
            return state;
    }
}

export default groupsReducer;