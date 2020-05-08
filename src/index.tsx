import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import { StateView } from "./components/stateView/stateView";
// import { PrecinctSelectScreen } from "./components/precinctSelectScreen/precinctSelectScreen";
// import { CustomRedistrictOverlay } from "./components/customRedistrictOverlay/customRedistrictOverlay";
import { AutomateRedistrictingOverlay } from "./components/automateRedistrictingOverlay/automateRedistrictingOverlay";

ReactDOM.render(
    <React.StrictMode>
        <AutomateRedistrictingOverlay />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
