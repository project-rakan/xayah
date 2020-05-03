import { GetCurrentRedistrictingResponse } from "../../Types/bladecallerApiTypes";
import { CurrentStateAction, CurrentStateActionType } from "./actionTypes";
import { State } from "../../Types/atomicTypes";

const initialState: GetCurrentRedistrictingResponse = {
    state: State.Iowa,
    maxDistricts: 0,
    fips: 0,
    precincts: [],
};

export const CurrentStateReducer = (
    state: GetCurrentRedistrictingResponse = initialState,
    action: CurrentStateAction
): GetCurrentRedistrictingResponse => {
    switch (action.type) {
        case CurrentStateActionType.ChangeCurrentStateAction:
            return action.payload;
        default:
            return state;
    }
};
