import { State, PrecinctID, DistrictID, MapID } from "./atomicTypes";

export interface StartMapJobRequest {
    state: State;
    GUID: string;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
}

export interface MapJobUpdate {
    GUID: string;
    mapId: MapID;
    updates: Map<PrecinctID, DistrictID>;
}

export interface ScoreMapRequest {
    GUID: string;
    state: State;
    map: Map<PrecinctID, DistrictID>;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
}

export interface ScoreMapResponse {
    GUID: string;
    score: number;
    probability: number;
}
