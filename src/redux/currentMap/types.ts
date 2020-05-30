import { State, Precinct } from "../../types";

export enum CurrentMapActionType {
    SetStateInfo = "SetStateInfo",
    SetMapLoadingStatus = "SetMapLoadingStatus",
    SetZoom = "SetZoom",
}

interface SetZoomAction {
    type: CurrentMapActionType.SetZoom;
    payload: number;
}

interface SetStateInfo {
    type: CurrentMapActionType.SetStateInfo;
    payload: StateInfo;
}

interface SetMapLoadingStatus {
    type: CurrentMapActionType.SetMapLoadingStatus;
    payload: boolean;
}

export type CurrentMapAction =
    | SetStateInfo
    | SetMapLoadingStatus
    | SetZoomAction;

export interface StateInfo {
    state: State;
    maxDistricts: number;
    fips: number;
    precincts: Precinct[];
}

export interface CurrentMap {
    isLoading: boolean;
    stateInfo: StateInfo;
    zoom: number;
}
