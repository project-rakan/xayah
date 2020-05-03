import {
    CreateGuidRequest,
    GetCurrentRedistrictingRequest,
    GetMapRequest,
} from "../../types/bladecallerApiTypes";
import { GUID } from "../../types/atomicTypes";

export interface BladeCallerProvider {
    CreateGuid(request: CreateGuidRequest): Promise<GUID>;

    GetMap(request: GetMapRequest): void;

    GetCurrentRedistricting(request: GetCurrentRedistrictingRequest): void;
}
