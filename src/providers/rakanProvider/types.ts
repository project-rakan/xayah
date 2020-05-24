import { State, PrecinctID, DistrictID, MapID, GUID } from "../../types";

export interface StartMapJobRequest {
    state: State;
    id: GUID;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
}

export interface MapJobUpdate {
    id: GUID;
    mapId: MapID;
    updates: Map<PrecinctID, DistrictID>;
    score: number;
    probability: number;
}

export interface ScoreMapRequest {
    id: GUID;
    state: State;
    map: Map<PrecinctID, DistrictID>;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
}

export interface ScoreMapResponse {
    id: GUID;
    score: number;
    probability: number;
}

export interface RakanProvider {
    startMapJob(request: StartMapJobRequest): void;
    requestMapScore(request: ScoreMapRequest): void;
}
