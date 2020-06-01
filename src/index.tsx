import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Router from "./components/router";
import { axiosBladecallerProvider } from "./providers/bladecallerProvider/axiosBladecallerProvider";
import { State } from "./types";
import { addMapJob } from "./redux/mapJobs/actionCreators";

// Beta Release - Ought to Draw precincts on map on page load, with appropriate colorings
axiosBladecallerProvider.getStateInfo({
    state: State.Iowa,
});
axiosBladecallerProvider.getDistricting({
    state: State.Iowa,
    mapId: 0,
});

// Create a new map job containing current Iowa districts
store.dispatch(
    addMapJob({
        name: "Current Districting",
        state: State.Iowa,
        id: "0",
        mapId: 0,
        alpha: 0,
        beta: 0,
        gamma: 0,
        eta: 0,
        map: new Map(),
    })
);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
