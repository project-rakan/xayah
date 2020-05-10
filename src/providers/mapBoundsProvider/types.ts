import { Cordinate, State } from "../../types";

export interface MapBounds {
    ne: Cordinate;
    sw: Cordinate;
}

export interface MapBoundsProvider {
    getMapBoundsFromState: (state: State) => MapBounds;
}
