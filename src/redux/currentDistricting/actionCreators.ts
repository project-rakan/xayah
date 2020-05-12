import { CurrentDistrictingActionType } from "./types";
import { PrecinctID, DistrictID, MapID } from "../../types";
import { store } from "../..";

export const replaceCurrentDistricting = (newMap: {
    districtMap: Map<PrecinctID, DistrictID>;
    mapId: MapID;
}): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.ReplaceCurrentDistrictingAction,
        payload: newMap,
    });
};

export const setCurrentDistrictingLoadingStatus = (
    isLoading: boolean
): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.SetDistrictingLoadingStatus,
        payload: isLoading,
    });
};

export const updateCurrentDistricting = (
    updates: Map<PrecinctID, DistrictID>
): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.UpdateCurrentDistrictingAction,
        payload: updates,
    });
};
