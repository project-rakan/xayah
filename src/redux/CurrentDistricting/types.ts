import { PrecinctID, DistrictID, MapID } from "../../types/atomicTypes";

export enum CurrentDistrictingActionType {
    ReplaceCurrentDistrictingAction = "ReplaceCurrentDistrictingAction",
    UpdateCurrentDistrictingAction = "UpdateCurrentDistrictingAction",
    SetDistrictingLoadingStatus = "SetDistrictingLoadingStatus",
}

interface ReplaceCurrentDistrictingAction {
    type: CurrentDistrictingActionType.ReplaceCurrentDistrictingAction;
    payload: { districtMap: Map<PrecinctID, DistrictID>; mapId: MapID };
}

interface UpdateCurrentDistrictingAction {
    type: CurrentDistrictingActionType.UpdateCurrentDistrictingAction;
    payload: Map<PrecinctID, DistrictID>;
}

interface SetDistrictingLoadingStatus {
    type: CurrentDistrictingActionType.SetDistrictingLoadingStatus;
    payload: boolean;
}

export type CurrentDistrictingAction =
    | UpdateCurrentDistrictingAction
    | ReplaceCurrentDistrictingAction
    | SetDistrictingLoadingStatus;

export interface CurrentDistricting {
    isLoading: boolean;
    mapID: MapID;
    districtMap: Map<PrecinctID, DistrictID>;
}
