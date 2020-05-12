import {
    BladeCallerProvider,
    GetStateInfoResponse,
    CreateGuidRequest,
    GetDistrictingRequest,
    GetStateInfoRequest,
    GetDistrictingResponse,
} from "./types";
import { GUID, State, StateName } from "../../types";
import {
    setStateInfo,
    setCurrentStateLoadingStatus,
} from "../../redux/currentState/actionCreators";
import {
    setCurrentDistrictingLoadingStatus,
    replaceCurrentDistricting,
} from "../../redux/currentDistricting/actionCreators";
const axios = require("axios").default;
let guidNum = 0;

class AxiosBladecallerProvider implements BladeCallerProvider {
    getStateInfoLocation(stateCode: State): string {
        return `http://bladecaller_database/stateinfo/${StateName[stateCode]}/${StateName[stateCode]}json`;
        // return `http://localhost:8000/stateinfo/${StateName[stateCode]}/${StateName[stateCode]}.json`;
    }
    getStateDistrictLocation(stateCode: State): string {
        return `http://bladecaller_database/stateinfo/${StateName[stateCode]}/${StateName[stateCode]}.districts.json`;
        // return `http://localhost:8000/stateinfo/${StateName[stateCode]}/${StateName[stateCode]}.districts.json`;
    }
    createGuid(request: CreateGuidRequest): Promise<GUID> {
        guidNum++;
        return Promise.resolve(
            `${request.state}-${request.jobType}-${guidNum}`
        );
    }
    getDistricting(request: GetDistrictingRequest): void {
        setCurrentDistrictingLoadingStatus(true);
        switch (request.state) {
            case State.Iowa:
                axios
                    .get(this.getStateDistrictLocation(request.state))
                    .then(function (response: GetDistrictingResponse) {
                        replaceCurrentDistricting({
                            districtMap: response.map,
                            mapId: 0,
                        });
                    })
                    .catch((error: string) => {
                        throw error;
                        console.log("error: ", error);
                    });
                setCurrentStateLoadingStatus(false);
                break;
            default:
                setCurrentStateLoadingStatus(false);
                throw new Error(
                    "Beta Bladecaller Provider only returns Iowa data"
                );
        }
    }
    getStateInfo(request: GetStateInfoRequest): void {
        setCurrentStateLoadingStatus(true);
        switch (request.state) {
            case State.Iowa:
                axios
                    .get(this.getStateInfoLocation(request.state))
                    .then(function (response: GetStateInfoResponse) {
                        setStateInfo(response);
                    });
                setCurrentStateLoadingStatus(false);
                break;
            default:
                setCurrentStateLoadingStatus(false);
                throw new Error(
                    "Beta Bladecaller Provider only returns Iowa data"
                );
        }
    }
}
export const axiosBladecallerProvider = new AxiosBladecallerProvider();
