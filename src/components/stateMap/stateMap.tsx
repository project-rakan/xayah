import React from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Coordinate, State } from "../../types";
import { fitBounds } from "google-map-react/utils";
import { cachedMapBoundsProvider } from "../../providers/mapBoundsProvider/mapBoundsProvider";

const mapStateToProps = (state: RootState): { state: State } => ({
    state: state.currentState.stateInfo.state,
});

const mapDispatchToProps = {};

export interface StateMapProps {
    state: State;
    size: { height: number; width: number };
}

class StateMap extends React.Component<StateMapProps> {
    center: Coordinate;
    zoom: number;

    constructor(props: StateMapProps) {
        super(props);
        const bounds = cachedMapBoundsProvider.getMapBoundsFromState(
            this.props.state
        );
        const { center, zoom } = fitBounds(bounds, this.props.size);
        this.center = center;
        this.zoom = zoom;
    }

    render(): JSX.Element {
        if (!process.env.REACT_APP_GOOGLE_API_KEY) {
            throw new Error("No Google Maps API Key defined");
        }

        return (
            <div
                style={{
                    height: this.props.size.height,
                    width: this.props.size.width,
                }}
            >
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_GOOGLE_API_KEY,
                    }}
                    defaultCenter={this.center}
                    defaultZoom={this.zoom}
                >
                    {/* TODO: draw precinct map svg here */}
                </GoogleMapReact>
            </div>
        );
    }
}

export const connectedStateMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(StateMap);
