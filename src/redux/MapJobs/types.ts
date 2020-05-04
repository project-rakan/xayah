import {
    State,
    GUID,
    MapID,
    PrecinctID,
    DistrictID,
} from "../../types/atomicTypes";

export enum MapJobsActionType {
    AddMapJobAction = "AddMapJobsAction",
    RemoveMapJobAction = "RemoveMapJobsAction",
    UpdateMapJobAction = "UpdateMapJobAction",
}

interface AddMapJobAction {
    type: MapJobsActionType.AddMapJobAction;
    payload: MapJob;
}

interface RemoveMapJobAction {
    type: MapJobsActionType.RemoveMapJobAction;
    payload: GUID;
}

interface UpdateMapJobAction {
    type: MapJobsActionType.UpdateMapJobAction;
    payload: MapJobUpdate;
}

export type MapJobsAction =
    | AddMapJobAction
    | RemoveMapJobAction
    | UpdateMapJobAction;

export interface MapJob {
    state: State;
    GUID: GUID;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    mapId?: MapID;
    map: Map<PrecinctID, DistrictID>;
}

export interface MapJobUpdate {
    map?: Map<PrecinctID, DistrictID>;
    mapId?: MapID;
    GUID: GUID;
}
