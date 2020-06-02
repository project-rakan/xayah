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

initializeIcons();

// Final Release - Ought to Draw precincts on map on page load
axiosBladecallerProvider.getStateInfo({
    state: State.Iowa,
});

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
