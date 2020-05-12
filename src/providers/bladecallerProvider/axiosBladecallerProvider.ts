import {
    BladeCallerProvider,
    CreateGuidRequest,
    GetDistrictingRequest,
    GetStateInfoRequest,
} from "./types";
import { GUID, StateName } from "../../types";
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
    createGuid = async (request: CreateGuidRequest): Promise<GUID> => {
        return axios
            .get(
                `http://127.0.0.1:8000/guid/?state=${request.state}&jobType=${request.jobType}&format=json`
            )
            .then((response) => response.data);
    };
    getDistricting = (request: GetDistrictingRequest): void => {
        setCurrentDistrictingLoadingStatus(true);
        const statename = StateName[request.state];
        axios
            .get(
                `http://127.0.0.1:8000/stateinfo/${statename}/${statename}.districts.json`
            )
            .then((response) => {
                replaceCurrentDistricting({
                    districtMap: response.data.map,
                    mapId: 0, // TODO adjust mapId correctly - no required for beta release
                });
            });
        setCurrentStateLoadingStatus(false);
    };
    getStateInfo = (request: GetStateInfoRequest): void => {
        setCurrentStateLoadingStatus(true);
        const statename = StateName[request.state];
        axios
            .get(
                `http://127.0.0.1:8000/stateinfo/${statename}/${statename}.json`
            )
            .then((response) => {
                setStateInfo(response.data);
            });
        setCurrentStateLoadingStatus(false);
    };
}
export const axiosBladecallerProvider = new AxiosBladecallerProvider();
