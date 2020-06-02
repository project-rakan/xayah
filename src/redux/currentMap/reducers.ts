import { CurrentMapAction, CurrentMapActionType, CurrentMap } from "./types";
import { State } from "../../types";

const initialState: CurrentMap = {
    isLoading: false,
    stateInfo: {
        state: State.Iowa,
        maxDistricts: 0,
        fips: 0,
        precincts: [],
    },
    zoom: 0,
    size: { width: window.innerWidth, height: window.innerHeight },
};

export const currentMapReducer = (
    state: CurrentMap = initialState,
    action: CurrentMapAction
): CurrentMap => {
    switch (action.type) {
        case CurrentMapActionType.SetStateInfo: {
            const newState = { ...state };

            newState.stateInfo = action.payload;

            return newState;
        }
        case CurrentMapActionType.SetMapLoadingStatus: {
            const newState = { ...state };

            newState.isLoading = action.payload;

            return newState;
        }
        case CurrentMapActionType.SetZoom: {
            const newState = { ...state };

            newState.zoom = action.payload;

            return newState;
        }
        case CurrentMapActionType.SetSize: {
            const newState = { ...state };

            newState.size = action.payload;

            return newState;
        }
        default:
            return state;
    }
};
