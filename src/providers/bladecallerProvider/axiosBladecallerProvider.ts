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
import { store } from "../../redux/store";

class AxiosBladecallerProvider implements BladeCallerProvider {
    // TODO remove redux dependency and refactor to utils
    createGuid = async (request: CreateGuidRequest): Promise<GUID> => {
        return axios
            .get(
                // use localhost for beta release
                `http://127.0.0.1:8000/guid/?state=${request.state}&jobType=${request.jobType}&format=json`
            )
            .then((response) => response.data)
            .catch((error) => {
                console.error(error);
            });
    };
    getDistricting = (request: GetDistrictingRequest): void => {
        store.dispatch(setCurrentDistrictingLoadingStatus(true));
        const statename = StateName[request.state];
        axios
            .get(
                // use localhost for beta release
                `http://127.0.0.1:8000/stateinfo/${statename}/${statename}.districts.json`
            )
            .then((response) => {
                console.log(response.data.map);
                store.dispatch(
                    replaceCurrentDistricting({
                        districtMap: response.data.map,
                        mapId: 0, // TODO adjust mapId correctly - no required for beta release
                    })
                );
            })
            .catch((error) => {
                console.error(error);
            });
        store.dispatch(setCurrentStateLoadingStatus(false));
    };
    getStateInfo = (request: GetStateInfoRequest): void => {
        store.dispatch(setCurrentStateLoadingStatus(true));
        const statename = StateName[request.state];
        axios
            .get(
                // use localhost for beta release
                `http://127.0.0.1:8000/stateinfo/${statename}/${statename}.json`
            )
            .then((response) => {
                store.dispatch(setStateInfo(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
        store.dispatch(setCurrentStateLoadingStatus(false));
    };
}
export const axiosBladecallerProvider = new AxiosBladecallerProvider();
