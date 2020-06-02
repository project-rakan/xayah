import React from "react";
import {
    Stack,
    IStackTokens,
    PrimaryButton,
    Label,
    TextField,
} from "office-ui-fabric-react";
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
import { Page, State, JobType } from "../../types";
import { axiosRakanProvider } from "../../providers/rakanProvider/axiosRakanProvider";
import { setPage } from "../../redux/router/actionCreators";
import { axiosBladecallerProvider } from "../../providers/bladecallerProvider/axiosBladecallerProvider";

const mapStateToProps = (
    state: RootState
): {
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    mapName: string;
    currentState: State;
} => ({
    alpha: state.userInput.alpha,
    beta: state.userInput.beta,
    gamma: state.userInput.gamma,
    eta: state.userInput.eta,
    mapName: state.userInput.mapName,
    currentState: state.currentMap.stateInfo.state,
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
    currentState: State;
    setAlpha: (alpha: number) => void;
    setBeta: (beta: number) => void;
    setGamma: (gamma: number) => void;
    setEta: (eta: number) => void;
    setMapName: (mapName: string) => void;
    setPage: (page: Page) => void;
}

const customSpacingStackTokens: IStackTokens = {
    childrenGap: "5%",
    padding: "s1 10%",
};

class AutomateRedistrictingOverlay extends React.Component<
    AutomateRedistrictingOverlayProps
> {
    render(): JSX.Element {
        return (
            <Stack tokens={customSpacingStackTokens}>
                <Label>Enter Mutators</Label>
                <div>
                    <TextField
                        label="Alpha"
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
                    <TextField
                        label="Map Name"
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
                <PrimaryButton
                    text="Generate"
                    disabled={this.props.mapName ? false : true}
                    required
                    onClick={(): void => {
                        axiosBladecallerProvider
                            .createGuid({
                                state: this.props.currentState,
                                jobType: JobType.StartMap,
                            })
                            .then((jobId) => {
                                axiosRakanProvider.startMapJob({
                                    name: this.props.mapName,
                                    alpha: this.props.alpha,
                                    beta: this.props.beta,
                                    gamma: this.props.gamma,
                                    eta: this.props.eta,
                                    id: jobId,
                                    state: State.Iowa,
                                });
                            });
                        this.props.setPage(Page.StateView);
                    }}
                />
            </Stack>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutomateRedistrictingOverlay);
