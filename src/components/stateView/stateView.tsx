import React from "react";
import {
    Stack,
    IStackTokens,
    PrimaryButton,
    Label,
    Dropdown,
    IDropdownStyles,
    IDropdownOption,
} from "office-ui-fabric-react";
import { State, Page } from "../../types";
import { connect } from "react-redux";
import StateMap from "./stateMap/stateMap";
import { RootState } from "../../redux/store";
import { setPage } from "../../redux/router/actionCreators";
import { axiosBladecallerProvider } from "../../providers/bladecallerProvider/axiosBladecallerProvider";
import MapJobList from "./mapList/mapJobList";
import { setSize } from "../../redux/currentMap/actionCreators";

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 140 },
};

const options: IDropdownOption[] = Object.values(State).map((state) => ({
    key: state,
    text: state,
}));

const mapStateToProps = (
    state: RootState
): {
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    currentState: State;
    isLoading: boolean;
    size: { width: number; height: number };
} => ({
    isLoading: state.currentMap.isLoading,
    currentState: state.currentMap.stateInfo.state,
    alpha: state.userInput.alpha,
    beta: state.userInput.beta,
    gamma: state.userInput.gamma,
    eta: state.userInput.eta,
    size: state.currentMap.size,
});

const mapDispatchToProps = {
    setPage: setPage,
    setSize: setSize,
};

interface StateViewProps {
    isLoading: boolean;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    currentState: State;
    size: { width: number; height: number };
    setPage: (page: Page) => void;
    setSize: (size: { width: number; height: number }) => void;
}

const customSpacingStackTokens: IStackTokens = {
    childrenGap: "5%",
    padding: "s1 10%",
};

class StateView extends React.Component<StateViewProps> {
    constructor(props: StateViewProps) {
        super(props);
    }

    handleResize = (): void => {
        this.props.setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    componentDidMount = (): void => {
        window.addEventListener("resize", this.handleResize);
    };

    componentWillUnmount = (): void => {
        window.removeEventListener("resize", this.handleResize);
    };

    render(): JSX.Element {
        if (this.props.isLoading) {
            return (
                <Stack>
                    <Label> Loading </Label>
                </Stack>
            );
        }

        return (
            <div>
                {/* Google Maps */}
                <div style={{ position: "absolute", left: 0, top: 0 }}></div>
                <StateMap
                    size={{
                        height: this.props.size.height,
                        width: this.props.size.width,
                    }}
                />
                <div />
                {/* UI Overlay */}
                <div style={{ position: "absolute", left: 0, top: 0 }}>
                    <Stack
                        tokens={customSpacingStackTokens}
                        style={{ background: "white" }}
                    >
                        <Label> Rakan </Label>
                        <Dropdown
                            label="Go To:"
                            options={options}
                            styles={dropdownStyles}
                            selectedKey={this.props.currentState}
                            onChange={(
                                event: React.FormEvent<HTMLDivElement>,
                                item?: IDropdownOption
                            ): void => {
                                if (item) {
                                    axiosBladecallerProvider.getStateInfo({
                                        state: item.key as State,
                                    });
                                }
                            }}
                        />
                        <PrimaryButton
                            text="Generate Automated Redistricting"
                            onClick={(): void =>
                                this.props.setPage(
                                    Page.AutomateRedistrictingOverlay
                                )
                            }
                        />
                        <Label> District Maps </Label>
                        <MapJobList />

                        <Label> Mutators </Label>
                        <Stack tokens={customSpacingStackTokens}>
                            <Label> Alpha Value: {this.props.alpha}</Label>
                            <Label> Beta Value: {this.props.beta} </Label>
                            <Label> Gamma Value: {this.props.gamma}</Label>
                            <Label> Eta Value: {this.props.eta}</Label>
                        </Stack>
                        <Label> Stats </Label>
                        <Stack tokens={customSpacingStackTokens}>
                            <Label>
                                Probability: 0 {/* TODO PROPOGATE MAP SCORE */}
                            </Label>
                            <Label>
                                Score: 0 {/* TODO PROPOGATE MAP SCORE */}
                            </Label>
                        </Stack>
                    </Stack>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateView);
