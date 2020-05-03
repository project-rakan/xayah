import { BladeCallerProvider } from "./types";
import {
    CreateGuidRequest,
    GetCurrentRedistrictingRequest,
    GetCurrentRedistrictingResponse,
    GetMapRequest,
} from "../../types/bladecallerApiTypes";
import { State, PrecinctID, DistrictID, GUID } from "../../types/atomicTypes";
import {
    ChangeCurrentState,
    SetCurrentStateLoadingStatus,
} from "../../redux/CurrentState/actionCreators";
import {
    SetCurrentDistrictingLoadingStatus,
    ReplaceCurrentDistricting,
} from "../../redux/CurrentDistricting/actionCreators";

class MockBladecallerProvider implements BladeCallerProvider {
    // Observe singleton design pattern for mock data
    static currentRedistrictingResponse: GetCurrentRedistrictingResponse = require("../../../data/iowa.json");

    CreateGuid(request: CreateGuidRequest): Promise<GUID> {
        return Promise.resolve(request.state + request.jobType + "123");
    }

    GetMap(request: GetMapRequest): void {
        SetCurrentDistrictingLoadingStatus(true);
        switch (request.state) {
            case State.Iowa:
                // TODO update with current districting mock data
                const DistrictMap = new Map<PrecinctID, DistrictID>();
                DistrictMap.set(1, 1);
                ReplaceCurrentDistricting(DistrictMap);
                SetCurrentStateLoadingStatus(false);
                break;
            default:
                SetCurrentStateLoadingStatus(false);
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }

    GetCurrentRedistricting(request: GetCurrentRedistrictingRequest): void {
        SetCurrentStateLoadingStatus(true);
        switch (request.state) {
            case State.Iowa:
                ChangeCurrentState(
                    MockBladecallerProvider.currentRedistrictingResponse
                );
                SetCurrentStateLoadingStatus(false);
                break;
            default:
                SetCurrentStateLoadingStatus(false);
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }
}

// Observe singleton design pattern for providers
export const mockBladecallerProvider = new MockBladecallerProvider();
