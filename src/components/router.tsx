import React from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { connectedCustomRedistrictOverlay as CustomRedistrictOverlay } from "./customRedistrictOverlay/customRedistrictOverlay";
import { connectedAutomateRedistrictingOverlay as AutomateRedistrictingOverlay } from "./automateRedistrictingOverlay/automateRedistrictingOverlay";
import { connectedStateView as StateView } from "./stateView/stateView";
import { PrecinctSelectScreen } from "./precinctSelectScreen/precinctSelectScreen";
import { Page } from "../types";

const mapStateToProps = (state: RootState): { page: Page } => ({
    page: state.page,
});

const mapDispatchToProps = {};

interface RouterProps {
    page: Page;
}

class Router extends React.Component<RouterProps> {
    render(): JSX.Element {
        switch (this.props.page) {
            case Page.StateView:
                return <StateView />;
            case Page.AutomateRedistrictingOverlay:
                return <AutomateRedistrictingOverlay />;
            case Page.CustomRedistrictOverlay:
                return <CustomRedistrictOverlay />;
            case Page.PrecintSelectScreen:
                return <PrecinctSelectScreen />;
            default:
                return <StateView />;
        }
    }
}

export const connectedRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Router);
