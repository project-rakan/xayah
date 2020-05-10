import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Precinct, PrecinctID, DistrictID, Coordinate } from "../../types";
import { MapBounds } from "../../providers/mapBoundsProvider/types";

const mapStateToProps = (
    state: RootState
): { precincts: Precinct[]; districtMap: Map<PrecinctID, DistrictID> } => ({
    precincts: state.currentState.stateInfo.precincts,
    districtMap: state.currentDistricting.districtMap,
});

const mapDispatchToProps = {};

interface PrecinctMapProps {
    precincts: Precinct[];
    districtMap: Map<PrecinctID, DistrictID>;
    size: { height: number; width: number };
    origin: Coordinate;
    max: Coordinate;
}

class PrecinctMap extends React.Component<PrecinctMapProps> {
    coordinateOffset = (vertex: Coordinate): [number, number] => [
        vertex.lng - this.props.origin.lng,
        vertex.lat - this.props.origin.lat,
    ];

    transform = (vertex: Coordinate): string => {
        const maxOffset = this.coordinateOffset(this.props.max);
        const offset = this.coordinateOffset(vertex);
        return `${(offset[0] / maxOffset[0]) * this.props.size.width},${
            (offset[1] / maxOffset[1]) * this.props.size.height
        }`;
    };

    render(): JSX.Element {
        return <svg>{/* TODO Render all precincts */}</svg>;
    }
}

export const connectedPrecinctMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrecinctMap);
