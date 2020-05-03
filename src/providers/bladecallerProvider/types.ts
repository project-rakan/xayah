import {
    CreateGuidRequest,
    CreateGuidResponse,
    GetCurrentRedistrictingRequest,
    GetMapResponse,
    GetMapRequest,
} from "../../Types/bladecallerApiTypes";

export interface BladeCallerProvider {
    CreateGuid(request: CreateGuidRequest): CreateGuidResponse;

    GetMap(request: GetMapRequest): GetMapResponse;

    GetCurrentRedistricting(request: GetCurrentRedistrictingRequest): void;
}
