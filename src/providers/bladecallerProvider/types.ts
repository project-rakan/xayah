import {
    CreateGuidRequest,
    CreateGuidResponse,
    GetCurrentRedistrictingRequest,
    GetCurrentRedistrictingResponse,
    GetMapResponse,
    GetMapRequest,
} from "./bladecallerApiTypes";

export interface BladeCallerProvider {
    createGuid(request: CreateGuidRequest): CreateGuidResponse;

    getMap(request: GetMapRequest): GetMapResponse;

    getCurrentRedistricting(
        request: GetCurrentRedistrictingRequest
    ): GetCurrentRedistrictingResponse;
}
