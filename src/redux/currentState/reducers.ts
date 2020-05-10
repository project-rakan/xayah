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
            };
        case CurrentStateActionType.SetStateLoadingStatus:
            return {
                isLoading: action.payload,
                stateInfo: state.stateInfo,
            };
        default:
            return state;
    }
};
