import React from "react";
import "./app.css";
import { rascalRakanProvider } from "./providers/rakanProvider/rascalRakanProvider";
import { State } from "./types";

export class App extends React.Component {
    render(): JSX.Element {
        rascalRakanProvider.startMapJob({
            id: "PLACEHOLDER",
            state: State.Iowa,
            alpha: 1,
            beta: 1,
            gamma: 1,
            eta: 1,
        });
        return (
            <div className="App">
                <header className="App-header">BootStrap Placeholder</header>
            </div>
        );
    }
}
