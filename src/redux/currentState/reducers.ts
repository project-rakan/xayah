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
        case CurrentStateActionType.SetStateInfo:
            return {
                isLoading: state.isLoading,
                stateInfo: action.payload,
                zoom: state.zoom,
            };
        case CurrentStateActionType.SetStateLoadingStatus:
            return {
                isLoading: action.payload,
                stateInfo: state.stateInfo,
                zoom: state.zoom,
            };
        case CurrentStateActionType.SetZoom:
            return {
                isLoading: state.isLoading,
                stateInfo: state.stateInfo,
                zoom: action.payload,
            };
        default:
            return state;
    }
};
