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
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

initializeIcons();

// Final Release - Ought to Draw precincts on map on page load
axiosBladecallerProvider.getStateInfo({
    state: State.Iowa,
});

// TODO create current Iowa district map job.

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

serviceWorker.unregister();
