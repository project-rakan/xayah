import {
    State,
    Precinct,
    JobType,
    MapID,
    PrecinctID,
    DistrictID,
    GUID,
} from "../../types";

export interface CreateGuidRequest {
    state: State;
    jobType: JobType;
}

export interface CreateGuidResponse {
    id: GUID;
}

export interface GetMapRequest {
    state: State;
    mapId: MapID;
}

export interface GetMapResponse {
    state: State;
    map: Map<PrecinctID, DistrictID>;
}

export interface GetCurrentRedistrictingRequest {
    state: State;
}

export interface GetCurrentRedistrictingResponse {
    state: State;
    maxDistricts: number;
    fips: number;
    precincts: Precinct[];
}
