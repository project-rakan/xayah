import {
    CurrentDistricting,
    CurrentDistrictingAction,
    CurrentDistrictingActionType,
} from "./types";
import { PrecinctID, DistrictID } from "../../types";

const initialState: CurrentDistricting = {
    isLoading: false,
    districtMap: new Map(),
    mapID: 0,
};

export const currentDistrictingReducer = (
    state: CurrentDistricting = initialState,
    action: CurrentDistrictingAction
): CurrentDistricting => {
    switch (action.type) {
        case CurrentDistrictingActionType.ReplaceCurrentDistrictingAction:
            return {
                isLoading: state.isLoading,
                mapID: action.payload.mapId,
                districtMap: new Map(action.payload.districtMap),
            };
        case CurrentDistrictingActionType.SetDistrictingLoadingStatus:
            return {
                isLoading: action.payload,
                mapID: state.mapID,
                districtMap: state.districtMap,
            };
        case CurrentDistrictingActionType.UpdateCurrentDistrictingAction:
            // Copy the old district map then update each new entry
            const newMap = new Map(state.districtMap);
            console.log("currentRedistricting", action);
            action.payload.forEach((value: DistrictID, key: PrecinctID) => {
                newMap.set(key, value);
            });
            return {
                isLoading: state.isLoading,
                districtMap: newMap,
                mapID: state.mapID,
            };
        default:
            return state;
    }
};
