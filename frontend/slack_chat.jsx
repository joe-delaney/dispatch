import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store"
import {login} from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    // TESTING START
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END
    ReactDOM.render(<Root store={store}/>, root);
});