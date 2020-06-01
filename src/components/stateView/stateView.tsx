import React from "react";
import "./stateView.css";
import {
    Dropdown,
    IDropdownStyles,
    IDropdownOption,
} from "office-ui-fabric-react/lib/Dropdown";
import { State, Page } from "../../types";
import { connect } from "react-redux";
import StateMap from "./stateMap/stateMap";
import { RootState } from "../../redux/store";
import { setPage } from "../../redux/router/actionCreators";
import { axiosBladecallerProvider } from "../../providers/bladecallerProvider/axiosBladecallerProvider";
import MapJobList from "./mapList/mapJobList";

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
} => ({
    isLoading: state.currentMap.isLoading,
    currentState: state.currentMap.stateInfo.state,
    alpha: state.userInput.alpha,
    beta: state.userInput.beta,
    gamma: state.userInput.gamma,
    eta: state.userInput.eta,
});

const mapDispatchToProps = {
    setPage: setPage,
};

interface StateViewProps {
    isLoading: boolean;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    currentState: State;
    setPage: (page: Page) => void;
}

class StateView extends React.Component<StateViewProps> {
    render(): JSX.Element {
        if (this.props.isLoading) {
            return <h1>Loading</h1>;
        }

        return (
            <div
                data-layer="660aad63-cd24-4373-aefa-1709afafc662"
                className="stateView"
            >
                <div
                    style={{ position: "relative", left: -500, top: 500 }}
                ></div>
                <StateMap size={{ height: 1080, width: 1920 }} />
                <div />
                <div
                    data-layer="73769fb7-a5b8-4c4a-bd88-553c9790ee67"
                    className="rakan"
                    style={{ backgroundColor: "white" }}
                >
                    Rakan
                </div>
                <div
                    data-layer="e5715165-6162-4303-8bd8-7ebe61a2f585"
                    className="goTo"
                >
                    <Dropdown
                        placeholder="Select a state"
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
                </div>
                <div
                    data-layer="ef82cc54-e6cd-431b-b7a7-3945cf11cb7f"
                    className="selectedDistrictMap"
                    style={{ backgroundColor: "white" }}
                >
                    Selected District Map
                </div>
                <div
                    data-layer="06e3b205-cb07-4ec4-8825-980a34a9697a"
                    className="group24"
                    style={{ backgroundColor: "white" }}
                >
                    {" "}
                    <div
                        data-layer="0d62007a-2b9c-4be8-8127-67e290489a4e"
                        className="group19"
                    >
                        {" "}
                        <div
                            data-layer="8dc84f11-adea-4920-beda-4d617501ca6e"
                            className="rectangle17"
                        ></div>
                        <div
                            data-layer="ce9a878e-4eff-4012-b274-b2afac58130d"
                            className="customRedistricting"
                            onClick={(): void =>
                                this.props.setPage(Page.CustomRedistrictOverlay)
                            }
                        >
                            Custom Redistricting
                        </div>
                    </div>
                    <div
                        data-layer="a0f69c84-b8d4-477e-abf5-45effae4dab1"
                        className="addMoreCustomDistricts"
                    >
                        Add more custom districts.
                    </div>
                </div>
                <div
                    data-layer="eca3b7f3-0b5f-4fea-ae55-1c87840806f5"
                    className="group25"
                    style={{ backgroundColor: "white" }}
                >
                    {" "}
                    <div
                        data-layer="cded1ad9-60be-4ab9-a1d8-9f9faec03fa9"
                        className="group20"
                        style={{ backgroundColor: "white" }}
                    >
                        {" "}
                        <div
                            data-layer="f7e5ab16-5a3a-4e22-af6d-ba25ddd39d6f"
                            className="rectangle18"
                        ></div>
                        <div
                            data-layer="6afb2a82-9085-41a8-aafa-f91efa642d48"
                            className="automatedRedistricting"
                            onClick={(): void =>
                                this.props.setPage(
                                    Page.AutomateRedistrictingOverlay
                                )
                            }
                        >
                            Automated Redistricting
                        </div>
                    </div>
                    <div
                        data-layer="e6c2da1c-770d-4ab5-9109-c40c6e08584d"
                        className="addMorePotentialRedistrictings"
                    >
                        Add more potential redistrictings.{" "}
                    </div>
                </div>
                <svg
                    data-layer="77769fa6-4691-4b45-b940-df32d58860fc"
                    preserveAspectRatio="none"
                    viewBox="-0.5 0 1 997"
                    className="line5"
                >
                    <path d="M 0 0 L 0 997" />
                </svg>

                {/* <div
                    data-layer="cbd5ac2f-98ae-41e8-80dd-5d5466700df7"
                    className="reviewCustomMaps"
                    style={{ backgroundColor: "white" }}
                >
                    REVIEW CUSTOM MAPS
                </div> */}

                <div
                    data-layer="a7666fa9-a254-4b11-8b2d-26d3ec42e0a0"
                    className="reviewAutomatedMaps"
                    style={{ backgroundColor: "white" }}
                >
                    REVIEW AUTOMATED MAPS
                    <MapJobList />
                </div>
                {/* <div
                    data-layer="2bd988f9-7e93-4061-b4a0-a7fe6a655663"
                    className="exampleWashington141554"
                    style={{ backgroundColor: "white" }}
                >
                    Example, Washington, 14:15:54
                </div> */}
                <div
                    data-layer="a5e10fbe-7148-4ee4-b05a-3c666a84ab4f"
                    className="example2California162333"
                    style={{ backgroundColor: "white" }}
                >
                    My First Automated Map, Iowa
                </div>
                <div
                    data-layer="a35ad519-3c87-4f3f-bb3e-144f55fc208c"
                    className="mutators"
                    style={{ backgroundColor: "white" }}
                >
                    MUTATORS
                </div>
                <div
                    data-layer="696dc46b-9417-4fdb-8eb7-f0393a678532"
                    className="alphaValueBetaValuegammaValueEtaValue"
                    style={{ backgroundColor: "white" }}
                >
                    Alpha Value: {this.props.alpha} <br />
                    Beta Value: {this.props.beta} <br />
                    Gamma Value: {this.props.gamma} <br />
                    Eta Value: {this.props.eta}{" "}
                </div>
                <div
                    data-layer="6dc7781a-37d2-4ff6-a429-0fa4d1139511"
                    className="stats"
                    style={{ backgroundColor: "white" }}
                >
                    STATS
                </div>
                <div
                    data-layer="7beb7b05-bcb9-467c-a4da-999a801bb513"
                    className="probabilityScore"
                    style={{ backgroundColor: "white" }}
                >
                    Probability: 0 <br />
                    Score: 0{" "}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateView);
