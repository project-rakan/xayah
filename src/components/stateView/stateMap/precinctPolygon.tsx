import { Precinct, Coordinate } from "../../../types";
import React from "react";
import { connect } from "react-redux";
import { coordToNormalCart } from "../../../utils/latLngMath";

const mapStateToProps = (): {} => ({});

const mapDispatchToProps = {};

export interface PrecinctPolygonProps {
    origin: Coordinate;
    max: Coordinate;
    precinct: Precinct;
    district: number | undefined;
    canvasSize: { height: number; width: number };
}

class PrecinctPolygon extends React.Component<PrecinctPolygonProps> {
    static colors = ["Green", "Blue", "Yellow", "Red", "Purple"];

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

        let districtColor;
        if (this.props.district == undefined) {
            districtColor = "None";
        } else {
            districtColor = PrecinctPolygon.colors[this.props.district];
        }

        return (
            <polygon
                points={points}
                stroke="black"
                fill={districtColor}
                fillOpacity="0.4"
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctPolygon);
