import {
    CurrentStateAction,
    CurrentStateActionType,
    CurrentState,
} from "./types";
import { State } from "../../types";

const initialState: CurrentState = {
    isLoading: false,
    stateInfo: { state: State.Iowa, maxDistricts: 0, fips: 0, precincts: [] },
};

export const currentStateReducer = (
    state: CurrentState = initialState,
    action: CurrentStateAction
): CurrentState => {
    switch (action.type) {
        case CurrentStateActionType.ChangeCurrentStateAction:
            return {
                isLoading: state.isLoading,
                stateInfo: action.payload,
            };
        default:
            return state;
    }
};
