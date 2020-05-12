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

export interface GetStateInfoRequest {
    state: State;
}

export interface GetStateInfoResponse {
    state: State;
    maxDistricts: number;
    fips: number;
    precincts: Precinct[];
}

export interface BladeCallerProvider {
    createGuid(request: CreateGuidRequest): Promise<GUID>;

    getDistricting(request: GetDistrictingRequest): void;

    getStateInfo(request: GetStateInfoRequest): void;
}
