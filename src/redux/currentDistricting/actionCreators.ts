import {
    CurrentDistrictingActionType,
    CurrentDistrictingAction,
} from "./types";
import { PrecinctID, DistrictID, MapID } from "../../types";

export const replaceCurrentDistricting = (newMap: {
    districtMap: Map<PrecinctID, DistrictID>;
    mapId: MapID;
}): CurrentDistrictingAction => ({
    type: CurrentDistrictingActionType.ReplaceCurrentDistrictingAction,
    payload: newMap,
});

export const setCurrentDistrictingLoadingStatus = (
    isLoading: boolean
): CurrentDistrictingAction => ({
    type: CurrentDistrictingActionType.SetDistrictingLoadingStatus,
    payload: isLoading,
});

export const updateCurrentDistricting = (
    updates: Map<PrecinctID, DistrictID>
): CurrentDistrictingAction => ({
    type: CurrentDistrictingActionType.UpdateCurrentDistrictingAction,
    payload: updates,
});
