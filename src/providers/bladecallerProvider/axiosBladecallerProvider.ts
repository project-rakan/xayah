import {
    BladeCallerProvider,
    CreateGuidRequest,
    GetDistrictingRequest,
    GetStateInfoRequest,
} from "./types";
import { GUID } from "../../types";
import {
    setStateInfo,
    setCurrentStateLoadingStatus,
} from "../../redux/currentState/actionCreators";
import {
    setCurrentDistrictingLoadingStatus,
    replaceCurrentDistricting,
} from "../../redux/currentDistricting/actionCreators";
import axios from "axios";

class AxiosBladecallerProvider implements BladeCallerProvider {
    createGuid(request: CreateGuidRequest): Promise<GUID> {
        return axios
            .get(
                `http://bladecaller_database/guid/?state=${request.state}&jobType=${request.jobType}&format=json`
            )
            .then((response) => response.data);
    }
    getDistricting(request: GetDistrictingRequest): void {
        setCurrentDistrictingLoadingStatus(true);
        axios
            .get(
                `http://bladecaller_database/stateinfo/${request.state}.districts.json` // TODO verfify this url is correct
            )
            .then((response) => {
                replaceCurrentDistricting({
                    districtMap: response.data.map,
                    mapId: 0, // TODO adjust mapId correctly - no required for beta release
                });
            });
        setCurrentStateLoadingStatus(false);
    }
    getStateInfo(request: GetStateInfoRequest): void {
        setCurrentStateLoadingStatus(true);
        axios
            .get(`http://bladecaller_database/stateinfo/${request.state}.json`) // TODO verfify this url is correct
            .then((response) => {
                setStateInfo(response.data);
            });
        setCurrentStateLoadingStatus(false);
    }
}
export const axiosBladecallerProvider = new AxiosBladecallerProvider();
