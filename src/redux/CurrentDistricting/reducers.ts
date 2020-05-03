import {
    CurrentDistricting,
    CurrentDistrictingAction,
    CurrentDistrictingActionType,
} from "./types";
import { PrecinctID, DistrictID } from "../../types/atomicTypes";

const initialState: CurrentDistricting = {
    isLoading: false,
    districtMap: new Map(),
};

export const CurrentDistrictingReducer = (
    state: CurrentDistricting = initialState,
    action: CurrentDistrictingAction
): CurrentDistricting => {
    switch (action.type) {
        case CurrentDistrictingActionType.ReplaceCurrentDistrictingAction:
            return {
                isLoading: state.isLoading,
                districtMap: new Map(action.payload),
            };
        case CurrentDistrictingActionType.SetDistrictingLoadingStatus:
            return {
                isLoading: action.payload,
                districtMap: state.districtMap,
            };
        case CurrentDistrictingActionType.UpdateCurrentDistrictingAction:
            // Copy the old district map then update each new entry
            const newMap = new Map(state.districtMap);
            action.payload.forEach((value: DistrictID, key: PrecinctID) => {
                newMap.set(key, value);
            });
            return {
                isLoading: state.isLoading,
                districtMap: newMap,
            };
        default:
            return state;
    }
};
