import {
    State,
    JobType,
    GUID,
    MapID,
    PrecinctID,
    DistrictID,
    Precinct,
} from "../../types";

export interface CreateGuidRequest {
    state: State;
    jobType: JobType;
}

export interface CreateGuidResponse {
    id: GUID;
}

export interface GetDistrictingRequest {
    state: State;
    mapId: MapID;
}

export interface GetDistrictingResponse {
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

export interface BladeCallerProvider {
    createGuid(request: CreateGuidRequest): Promise<GUID>;

    getMap(request: GetDistrictingRequest): void;

    getCurrentRedistricting(request: GetCurrentRedistrictingRequest): void;
}
