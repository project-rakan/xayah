import { Coordinate, State } from "../../types";

export interface MapBounds {
    ne: Coordinate;
    sw: Coordinate;
}

export interface MapBoundsProvider {
    getMapBoundsFromState: (state: State) => MapBounds;
}
