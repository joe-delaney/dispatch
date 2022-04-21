import React from "react";
import ReactDOM from "react-dom";
import {login, logout, signup} from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to SlackChat</h1>, root);
});