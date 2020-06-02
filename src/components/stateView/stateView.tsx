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
import { MapJob } from "../../redux/mapJobs/types";

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 140 },
};

// const options: IDropdownOption[] = Object.values(State).map((state) => ({
//     key: state,
//     text: state,
// }));

// Currently data is only avaliable for WA and IA
const options: IDropdownOption[] = [
    { key: State.Iowa, text: State.Iowa },
    { key: State.Washington, text: State.Washington },
];

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
    currentMapID: number;
    mapJobList: MapJob[];
} => ({
    isLoading: state.currentMap.isLoading,
    currentState: state.currentMap.stateInfo.state,
    currentMapID: state.currentDistricting.mapID,
    mapJobList: state.mapJobs,
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
    currentMapID: number;
    mapJobList: MapJob[];
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
        const currentJob = this.props.mapJobList.find(
            (job) => job.mapId == this.props.currentMapID
        );

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

                        {/* Only show Stats for custom or generated maps, not for the edge case of the current map*/}
                        {this.props.currentMapID != 0 ? (
                            <>
                                <Label> Mutators </Label>
                                <Stack tokens={customSpacingStackTokens}>
                                    <Label>
                                        Alpha Value: {this.props.alpha}
                                    </Label>
                                    <Label>Beta Value: {this.props.beta}</Label>
                                    <Label>
                                        Gamma Value: {this.props.gamma}
                                    </Label>
                                    <Label> Eta Value: {this.props.eta}</Label>
                                </Stack>
                                <Label> Stats </Label>
                                <Stack tokens={customSpacingStackTokens}>
                                    <Label>
                                        Probability: {currentJob?.probability}
                                    </Label>
                                    <Label>Score: {currentJob?.score}</Label>
                                </Stack>
                            </>
                        ) : (
                            <></>
                        )}
                    </Stack>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateView);
