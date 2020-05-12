import { Precinct, Coordinate } from "../../types";
import React from "react";
import { connect } from "react-redux";
import { coordToNormalCart } from "../../utils/latLngMath";

const mapStateToProps = (): {} => ({});

const mapDispatchToProps = {};

export interface PrecinctPolygonProps {
    origin: Coordinate;
    max: Coordinate;
    precinct: Precinct;
    districtColor: string;
    canvasSize: { height: number; width: number };
}

class PrecinctPolygon extends React.Component<PrecinctPolygonProps> {
    render(): JSX.Element {
        const points: string = this.props.precinct.vertices
            .map((vertex: Coordinate) => {
                const [x, y] = coordToNormalCart(
                    vertex,
                    this.props.origin,
                    this.props.max
                );
                return `${x * this.props.canvasSize.width},${
                    y * this.props.canvasSize.height
                }`;
            })
            .reduce((prev: string, cur: string, index: number) => {
                if (index === 0) {
                    return cur;
                } else {
                    return `${prev} ${cur}`;
                }
            });
        return (
            <polygon
                points={points}
                stroke="black"
                fill={this.props.districtColor}
            />
        );
    }
}

export const connectedPrecinctPolygon = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrecinctPolygon);
