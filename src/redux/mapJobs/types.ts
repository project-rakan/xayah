import { State, GUID, MapID, PrecinctID, DistrictID } from "../../types";

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
    name: string;
    state: State;
    id: GUID;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    mapId: MapID;
    map: Map<PrecinctID, DistrictID>;
    score: number;
    probability: number;
}

export interface MapJobUpdate {
    map?: Map<PrecinctID, DistrictID>;
    mapId?: MapID;
    id: GUID;
    score?: number;
    probability?: number;
}
