import React from "react";
import "./automateRedistrictingOverlay.css";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import {
    setAlpha,
    setMapName,
    setBeta,
    setGamma,
    setEta,
    setPage,
} from "../../redux/userInput/actionCreators";
import {} from "@uifabric/react-hooks";
import { Page } from "../../types";

const mapStateToProps = (
    state: RootState
): {
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    mapName: string;
} => ({
    alpha: state.userInput.alpha,
    beta: state.userInput.beta,
    gamma: state.userInput.gamma,
    eta: state.userInput.eta,
    mapName: state.userInput.mapName,
});

const mapDispatchToProps = {
    setAlpha: setAlpha,
    setBeta: setBeta,
    setGamma: setGamma,
    setEta: setEta,
    setMapName: setMapName,
    setPage: setPage,
};

interface AutomateRedistrictingOverlayProps {
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    mapName: string;
    setAlpha: (alpha: number) => void;
    setBeta: (beta: number) => void;
    setGamma: (gamma: number) => void;
    setEta: (eta: number) => void;
    setMapName: (mapName: string) => void;
    setPage: (page: Page) => void;
}

class AutomateRedistrictingOverlay extends React.Component<
    AutomateRedistrictingOverlayProps
> {
    render(): JSX.Element {
        return (
            <div
                data-layer="f621095c-e81f-431c-91c7-f2b9d2e55378"
                className="automateRedistrictingOverlay"
            >
                {" "}
                <div
                    data-layer="8b36523c-1d09-49b9-ac9d-cf764932fae1"
                    className="generate"
                >
                    Generate
                </div>
                <div
                    data-layer="12315a68-462c-47bc-9161-68b960ab181d"
                    className="rectangle17"
                    onClick={(): void => this.props.setPage(Page.StateView)}
                ></div>
                <div
                    data-layer="c131fc01-cc7c-4659-8b1f-4fea6962c855"
                    className="enterMutators"
                >
                    Enter Mutators
                </div>
                <div
                    data-layer="2074e3c8-cf42-48bf-ba19-0d2f0c3eb5b6"
                    className="alphaValueBetaValuegammaValueEtaValueMapName"
                >
                    Mutators
                    <TextField
                        label="Alpha"
                        name="alpha"
                        onChange={(
                            event: React.FormEvent<
                                HTMLInputElement | HTMLTextAreaElement
                            >,
                            newValue?: string
                        ): void => {
                            if (newValue !== undefined) {
                                this.props.setAlpha(+newValue);
                            }
                        }}
                        value={this.props.alpha.toString()}
                    />
                    <TextField
                        label="Beta"
                        name="beta"
                        onChange={(
                            event: React.FormEvent<
                                HTMLInputElement | HTMLTextAreaElement
                            >,
                            newValue?: string
                        ): void => {
                            if (newValue !== undefined) {
                                this.props.setBeta(+newValue);
                            }
                        }}
                        value={this.props.beta.toString()}
                    />
                    <TextField
                        label="Gamma"
                        name="gamma"
                        onChange={(
                            event: React.FormEvent<
                                HTMLInputElement | HTMLTextAreaElement
                            >,
                            newValue?: string
                        ): void => {
                            if (newValue !== undefined) {
                                this.props.setGamma(+newValue);
                            }
                        }}
                        value={this.props.gamma.toString()}
                    />
                    <TextField
                        label="Eta"
                        name="eta"
                        onChange={(
                            event: React.FormEvent<
                                HTMLInputElement | HTMLTextAreaElement
                            >,
                            newValue?: string
                        ): void => {
                            if (newValue !== undefined) {
                                this.props.setEta(+newValue);
                            }
                        }}
                        value={this.props.eta.toString()}
                    />
                    <br />
                    Map Name{" "}
                    <TextField
                        name="mapName"
                        onChange={(
                            event: React.FormEvent<
                                HTMLInputElement | HTMLTextAreaElement
                            >,
                            newValue?: string
                        ): void => {
                            if (newValue !== undefined) {
                                this.props.setMapName(newValue);
                            }
                        }}
                        value={this.props.mapName.toString()}
                    />
                </div>
            </div>
        );
    }
}

export const connectedAutomateRedistrictingOverlay = connect(
    mapStateToProps,
    mapDispatchToProps
)(AutomateRedistrictingOverlay);
