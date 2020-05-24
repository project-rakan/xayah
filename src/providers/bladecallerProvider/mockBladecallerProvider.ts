import {
    BladeCallerProvider,
    GetStateInfoResponse,
    CreateGuidRequest,
    GetDistrictingRequest,
    GetStateInfoRequest,
} from "./types";
import {
    setCurrentStateLoadingStatus,
    setStateInfo,
} from "../../redux/currentState/actionCreators";
import {
    setCurrentDistrictingLoadingStatus,
    replaceCurrentDistricting,
} from "../../redux/currentDistricting/actionCreators";
import { GUID, State, PrecinctID, DistrictID } from "../../types";
import { store } from "../../redux/store";

// TODO remove redux dependency and refactor to utils

class MockBladecallerProvider implements BladeCallerProvider {
    // Observe singleton design pattern for mock data
    static currentRedistrictingResponse: GetStateInfoResponse = require("../../../data/iowa.json");

    createGuid(request: CreateGuidRequest): Promise<GUID> {
        return Promise.resolve(request.state + request.jobType + "123");
    }

    getDistricting(request: GetDistrictingRequest): void {
        store.dispatch(setCurrentDistrictingLoadingStatus(true));
        switch (request.state) {
            case State.Iowa:
                // TODO update with current districting mock data
                const districtMap = new Map<PrecinctID, DistrictID>();
                districtMap.set(1, 1);
                store.dispatch(
                    replaceCurrentDistricting({
                        districtMap: districtMap,
                        mapId: 0,
                    })
                );
                store.dispatch(setCurrentStateLoadingStatus(false));
                break;
            default:
                store.dispatch(setCurrentStateLoadingStatus(false));
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }

    getStateInfo(request: GetStateInfoRequest): void {
        store.dispatch(setCurrentStateLoadingStatus(true));
        switch (request.state) {
            case State.Iowa:
                store.dispatch(
                    setStateInfo(
                        MockBladecallerProvider.currentRedistrictingResponse
                    )
                );
                store.dispatch(setCurrentStateLoadingStatus(false));
                break;
            default:
                store.dispatch(setCurrentStateLoadingStatus(false));
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }
}

// Observe singleton design pattern for providers
export const mockBladecallerProvider = new MockBladecallerProvider();
