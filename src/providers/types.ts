import {
    CreateGuidRequest,
    CreateGuidResponse,
    GetCurrentRedistrictingRequest,
    GetCurrentRedistrictingResponse,
    GetMapResponse,
    GetMapRequest,
} from "./bladecallerProvider/bladecallerApiTypes";

export interface BladeCallerProvider {
    createGuid(request: CreateGuidRequest): CreateGuidResponse;

    getMap(request: GetMapRequest): GetMapResponse;

    getCurrentRedistricting(
        request: GetCurrentRedistrictingRequest
    ): GetCurrentRedistrictingResponse;
}
