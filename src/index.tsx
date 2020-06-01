import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Router from "./components/router";
import { axiosBladecallerProvider } from "./providers/bladecallerProvider/axiosBladecallerProvider";
import { State } from "./types";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { addMapJob } from "./redux/mapJobs/actionCreators";

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
        mapId: 0,
        id: State.Iowa,
        state: State.Iowa,
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
