import { BladeCallerProvider } from "./types";
import {
    CreateGuidRequest,
    CreateGuidResponse,
    GetCurrentRedistrictingRequest,
    GetCurrentRedistrictingResponse,
    GetMapRequest,
    GetMapResponse,
} from "../../Types/bladecallerApiTypes";
import { State, PrecinctID, DistrictID } from "../../Types/atomicTypes";
import { ChangeCurrentState } from "../../redux/CurrentState/ActionCreators";

class MockBladecallerProvider implements BladeCallerProvider {
    // Observe singleton design pattern for mock data
    currentRedistrictingResponse: GetCurrentRedistrictingResponse = require("../../../data/iowa.json");

    CreateGuid(request: CreateGuidRequest): CreateGuidResponse {
        return { GUID: request.state + request.jobType + "123" };
    }

    GetMap(request: GetMapRequest): GetMapResponse {
        return { state: request.state, map: new Map<PrecinctID, DistrictID>() };
    }

    GetCurrentRedistricting(request: GetCurrentRedistrictingRequest): void {
        switch (request.state) {
            case State.Iowa:
                ChangeCurrentState(this.currentRedistrictingResponse);
                break;
            default:
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }
}

// Observe singleton design pattern for providers
export const mockBladecallerProvider = new MockBladecallerProvider();
