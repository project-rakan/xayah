import {
    CreateGuidRequest,
    CreateGuidResponse,
    GetCurrentRedistrictingRequest,
    GetCurrentRedistrictingResponse,
    GetMapResponse,
    GetMapRequest,
} from "./bladecallerProvider/bladecallerApiTypes";

export interface BladeCallerProvider {
    CreateGuid(request: CreateGuidRequest): CreateGuidResponse;

    GetMap(request: GetMapRequest): GetMapResponse;

    GetCurrentRedistricting(
        request: GetCurrentRedistrictingRequest
    ): GetCurrentRedistrictingResponse;
}
