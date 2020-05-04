import { store } from "../store";
import { CurrentDistrictingActionType } from "./types";
import { PrecinctID, DistrictID, MapID } from "../../types/atomicTypes";

export const ReplaceCurrentDistricting = (newMap: {
    districtMap: Map<PrecinctID, DistrictID>;
    mapId: MapID;
}): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.ReplaceCurrentDistrictingAction,
        payload: newMap,
    });
};

export const SetCurrentDistrictingLoadingStatus = (
    isLoading: boolean
): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.SetDistrictingLoadingStatus,
        payload: isLoading,
    });
};

// TODO: write rakan mocks and utilize UpdateCurrentDistricting
export const UpdateCurrentDistricting = (
    updates: Map<PrecinctID, DistrictID>
): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.UpdateCurrentDistrictingAction,
        payload: updates,
    });
};
