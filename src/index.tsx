import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import * as serviceWorker from "./serviceWorker";
import { axiosBladecallerProvider } from "./providers/bladecallerProvider/axiosBladecallerProvider";
import { JobType, State } from "./types";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

axiosBladecallerProvider.getDistricting({
    state: State.Iowa,
    mapId: 1,
});

axiosBladecallerProvider.getStateInfo({
    state: State.Iowa,
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
