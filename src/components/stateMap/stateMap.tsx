import React from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { State } from "../../types";
import { fitBounds } from "google-map-react/utils";
import { cachedMapBoundsProvider } from "../../providers/mapBoundsProvider/mapBoundsProvider";
import { connectedPrecinctMap as PrecinctMap } from "./precinctMap";

const mapStateToProps = (state: RootState): { state: State } => ({
    state: state.currentState.stateInfo.state,
});

const mapDispatchToProps = {};

export interface StateMapProps {
    state: State;
    size: { height: number; width: number };
}

class StateMap extends React.Component<StateMapProps> {
    render(): JSX.Element {
        if (!process.env.REACT_APP_GOOGLE_API_KEY) {
            throw new Error("No Google Maps API Key defined");
        }

        const bounds = cachedMapBoundsProvider.getMapBoundsFromState(
            this.props.state
        );
        const { center, zoom } = fitBounds(bounds, this.props.size);

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
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <PrecinctMap
                        size={this.props.size}
                        origin={{ lat: bounds.ne.lat, lng: bounds.sw.lng }}
                        max={{ lat: bounds.sw.lat, lng: bounds.ne.lng }}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export const connectedStateMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(StateMap);
