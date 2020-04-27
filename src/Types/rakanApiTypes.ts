import { State, PrecinctID, DistrictID, MapID, GUID } from "./atomicTypes";

export interface StartMapJobRequest {
    state: State;
    GUID: GUID;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
}

export interface MapJobUpdate {
    GUID: string;
    mapId: GUID;
    updates: Map<PrecinctID, DistrictID>;
}

export interface ScoreMapRequest {
    GUID: GUID;
    state: State;
    map: Map<PrecinctID, DistrictID>;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
}

export interface ScoreMapResponse {
    GUID: GUID;
    score: number;
    probability: number;
}
