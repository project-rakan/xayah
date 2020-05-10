import { MapBounds, MapBoundsProvider } from "./types";
import { State } from "../../types";

class CachedMapBoundsProvider implements MapBoundsProvider {
    static stateMapBounds: {
        [key: string]: MapBounds;
    } = require("../../../data/stateMapBounds.json");

    getMapBoundsFromState = (state: State): MapBounds => {
        return CachedMapBoundsProvider.stateMapBounds[state];
    };
}

export const cachedMapBoundsProvider = new CachedMapBoundsProvider();
