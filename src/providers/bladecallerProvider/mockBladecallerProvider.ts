import { BladeCallerProvider } from "../Types";
import {
    CreateGuidRequest,
    CreateGuidResponse,
    GetCurrentRedistrictingRequest,
    GetCurrentRedistrictingResponse,
    GetMapRequest,
    GetMapResponse,
} from "../../Types/bladecallerApiTypes";
import { State, PrecinctID, DistrictID } from "../../Types/atomicTypes";

class MockBladecallerProvider implements BladeCallerProvider {
    // Observe singleton design pattern for mock data
    currentRedistrictingResponse: GetCurrentRedistrictingResponse = require("../../../data/iowa.json");

    CreateGuid(request: CreateGuidRequest): CreateGuidResponse {
        return { GUID: request.state + request.jobType + "123" };
    }

    GetMap(request: GetMapRequest): GetMapResponse {
        return { state: request.state, map: new Map<PrecinctID, DistrictID>() };
    }

    GetCurrentRedistricting(
        request: GetCurrentRedistrictingRequest
    ): GetCurrentRedistrictingResponse {
        switch (request.state) {
            case State.Iowa:
                return this.currentRedistrictingResponse;
            default:
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }
}

// Observe singleton design pattern for providers
export const mockBladecallerProvider = new MockBladecallerProvider();
