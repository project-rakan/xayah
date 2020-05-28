import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../redux/store";
import { Precinct, PrecinctID, DistrictID, Coordinate } from "../../../types";
import PrecinctPolygon from "./precinctPolygon";
import { getSize } from "../../../utils/latLngMath";

const mapStateToProps = (
    state: RootState
): {
    precincts: Precinct[];
    districtMap: Map<PrecinctID, DistrictID>;
    zoom: number;
} => ({
    precincts: state.currentState.stateInfo.precincts,
    districtMap: state.currentDistricting.districtMap,
    zoom: state.currentState.zoom,
});

const mapDispatchToProps = {};

interface PrecinctMapProps {
    precincts: Precinct[];
    districtMap: Map<PrecinctID, DistrictID>;
    lat: number;
    lng: number;
    max: Coordinate;
    zoom: number;
}

class PrecinctMap extends React.Component<PrecinctMapProps> {
    // const district = this.props.districtMap.get(precinct.id);

    // if (district === undefined) {
    //     throw new Error("unassigned Precinct " + precinct.id);
    // }

    render(): JSX.Element {
        console.log("precinctMap zoom " + this.props.zoom);
        const origin = {
            lat: this.props.lat,
            lng: this.props.lng,
        };
        const size = getSize(origin, this.props.max, this.props.zoom);

        return (
            <svg height={size.height} width={size.width}>
                {this.props.precincts.map(
                    (precinct: Precinct, index: number) => (
                        <PrecinctPolygon
                            canvasSize={size}
                            origin={origin}
                            max={this.props.max}
                            key={index}
                            precinct={precinct}
                            district={this.props.districtMap.get(precinct.id)}
                        />
                    )
                )}
            </svg>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctMap);
