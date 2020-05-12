import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import { App } from "./app";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Frontload } from "react-frontload";
import { ConnectedRouter } from "connected-react-router";
import Loadable from "react-loadable";
import createStore from "./store";

export const { store, history } = createStore();

if (store === undefined) {
    console.error("store is undefined");
}

const application = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Frontload noServerRender={true}>
                <App />
            </Frontload>
        </ConnectedRouter>
    </Provider>
);

const root = document.querySelector("#root");
if (!root) {
    throw new Error("root is null");
}
if (root.hasChildNodes() === true) {
    Loadable.preloadReady().then(() => {
        hydrate(application, root);
    });
} else {
    render(application, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
