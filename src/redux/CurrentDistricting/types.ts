import { PrecinctID, DistrictID } from "../../types/atomicTypes";

export enum CurrentDistrictingActionType {
    ReplaceCurrentDistrictingAction = "ReplaceCurrentDistrictingAction",
    UpdateCurrentDistrictingAction = "UpdateCurrentDistrictingAction",
    SetDistrictingLoadingStatus = "SetDistrictingLoadingStatus",
}

interface ReplaceCurrentDistrictingAction {
    type: CurrentDistrictingActionType.ReplaceCurrentDistrictingAction;
    payload: Map<PrecinctID, DistrictID>;
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
    districtMap: Map<PrecinctID, DistrictID>;
}
