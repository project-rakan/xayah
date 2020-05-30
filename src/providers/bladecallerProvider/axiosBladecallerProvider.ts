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
import axios from "../axios";
import { store } from "../../redux/store";

class AxiosBladecallerProvider implements BladeCallerProvider {
    // TODO remove redux dependency and refactor to utils
    createGuid = async (request: CreateGuidRequest): Promise<GUID> => {
        return axios
            .post("create-guid/", request)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error);
            });
    };
    getDistricting = (request: GetDistrictingRequest): void => {
        store.dispatch(setCurrentDistrictingLoadingStatus(true));
        axios
            .post("get-districting/", request)
            .then((response) => response.data)
            .then((data) => {
                store.dispatch(
                    replaceCurrentDistricting({
                        districtMap: data.map,
                        mapId: data.id, // TODO adjust mapId correctly - no required for beta release
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
        axios
            .get(`stateinfo/${request.state}.json`)
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
