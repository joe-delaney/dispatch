import { combineReducers } from "redux";
import modalsReducer from "./modals_reducer";

const uiiReducer = combineReducers({
    modals: modalsReducer
});

export default uiiReducer;