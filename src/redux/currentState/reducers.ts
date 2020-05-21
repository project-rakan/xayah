import {
    CurrentStateAction,
    CurrentStateActionType,
    CurrentState,
} from "./types";
import { State } from "../../types";

const initialState: CurrentState = {
    isLoading: false,
    stateInfo: {
        state: State.Iowa,
        maxDistricts: 0,
        fips: 0,
        precincts: [],
    },
    zoom: 0,
};

export const currentStateReducer = (
    state: CurrentState = initialState,
    action: CurrentStateAction
): CurrentState => {
    switch (action.type) {
        case CurrentStateActionType.SetStateInfo: {
            const newState = { ...state };

            newState.stateInfo = action.payload;

            return newState;
        }
        case CurrentStateActionType.SetStateLoadingStatus: {
            const newState = { ...state };

            newState.isLoading = action.payload;

            return newState;
        }
        case CurrentStateActionType.SetZoom: {
            const newState = { ...state };

            newState.zoom = action.payload;

            return newState;
        }
        default:
            return state;
    }
};
