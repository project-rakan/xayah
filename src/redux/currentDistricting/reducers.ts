import {
    CurrentDistricting,
    CurrentDistrictingAction,
    CurrentDistrictingActionType,
} from "./types";

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
        case CurrentDistrictingActionType.ReplaceCurrentDistrictingAction: {
            const newState = { ...state };

            newState.mapID = action.payload.mapId;
            newState.districtMap = new Map(action.payload.districtMap);

            return newState;
        }
        case CurrentDistrictingActionType.SetDistrictingLoadingStatus: {
            const newState = { ...state };

            newState.isLoading = action.payload;

            return newState;
        }
        case CurrentDistrictingActionType.UpdateCurrentDistrictingAction: {
            const newState = { ...state };

            // Copy the old district map then update each new entry
            const newMap = new Map(action.payload);
            // action.payload.forEach((value: DistrictID, key: PrecinctID) => {
            //     newMap.set(key, value);
            // });
            newState.districtMap = newMap;

            return newState;
        }
        default:
            return state;
    }
};
