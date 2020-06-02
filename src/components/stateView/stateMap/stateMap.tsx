import React from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { RootState } from "../../../redux/store";
import { State } from "../../../types";
import { fitBounds } from "google-map-react/utils";
import { cachedMapBoundsProvider } from "../../../providers/mapBoundsProvider/mapBoundsProvider";
import PrecinctMap from "./precinctMap";
import { setZoom } from "../../../redux/currentMap/actionCreators";

const mapStateToProps = (state: RootState): { state: State } => ({
    state: state.currentMap.stateInfo.state,
});

const mapDispatchToProps = {
    setZoom: setZoom,
};

export interface StateMapProps {
    state: State;
    size: { height: number; width: number };
    setZoom: (zoom: number) => void;
}

class StateMap extends React.Component<StateMapProps> {
    onChangeHandler = (update: { zoom: number }): void => {
        this.props.setZoom(update.zoom);
    };

    render(): JSX.Element {
        if (!process.env.REACT_APP_GOOGLE_API_KEY) {
            throw new Error("No Google Maps API Key defined");
        }

        const bounds = cachedMapBoundsProvider.getMapBoundsFromState(
            this.props.state
        );
        const { center, zoom: defaultZoom } = fitBounds(
            bounds,
            this.props.size
        );
        this.props.setZoom(defaultZoom);

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
                    zoom={defaultZoom}
                    onChange={this.onChangeHandler}
                >
                    {/* Must pass lat and lng seperately for map location to be correct */}
                    <PrecinctMap
                        max={{ lat: bounds.sw.lat, lng: bounds.ne.lng }}
                        lat={bounds.ne.lat}
                        lng={bounds.sw.lng}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateMap);
