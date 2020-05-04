import { BladeCallerProvider } from "./types";
import {
    CreateGuidRequest,
    CreateGuidResponse,
    GetCurrentRedistrictingRequest,
    GetCurrentRedistrictingResponse,
    GetMapRequest,
    GetMapResponse,
} from "./bladecallerApiTypes";
import { State, PrecinctID, DistrictID } from "../../types";

class MockBladecallerProvider implements BladeCallerProvider {
    // Observe singleton design pattern for mock data
    currentRedistrictingResponse: GetCurrentRedistrictingResponse = require("../../../data/iowa.json");

    createGuid(request: CreateGuidRequest): CreateGuidResponse {
        return { id: request.state + request.jobType + "123" };
    }

    getMap(request: GetMapRequest): GetMapResponse {
        return { state: request.state, map: new Map<PrecinctID, DistrictID>() };
    }

    getCurrentRedistricting(
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
