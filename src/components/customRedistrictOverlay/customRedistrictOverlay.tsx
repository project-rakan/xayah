import React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import {
    setAlpha,
    setMapName,
    setBeta,
    setGamma,
    setEta,
} from "../../redux/userInput/actionCreators";
import {} from "@uifabric/react-hooks";
import { Page } from "../../types";
import { setPage } from "../../redux/router/actionCreators";

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

interface CustomRedistrictOverlayProps {
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

export class CustomRedistrictOverlay extends React.Component<
    CustomRedistrictOverlayProps
> {
    render(): JSX.Element {
        return (
            <div>
                <div>Enter Mutators</div>
                <div onClick={(): void => this.props.setPage(Page.StateView)}>
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
                    Map Name
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
                <div>Score</div>
                <div></div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomRedistrictOverlay);
