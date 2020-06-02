import {
    BladeCallerProvider,
    CreateGuidRequest,
    GetDistrictingRequest,
    GetStateInfoRequest,
} from "./types";
import { GUID } from "../../types";
import {
    setStateInfo,
    setCurrentMapLoadingStatus,
} from "../../redux/currentMap/actionCreators";
import {
    setCurrentDistrictingLoadingStatus,
    replaceCurrentDistricting,
} from "../../redux/currentDistricting/actionCreators";
import axios from "../axios";
import { store } from "../../redux/store";
import { addMapJob } from "../../redux/mapJobs/actionCreators";

class AxiosBladecallerProvider implements BladeCallerProvider {
    // TODO remove redux dependency and refactor to utils
    // TODO refactor state modification logic
    createGuid = async (request: CreateGuidRequest): Promise<GUID> => {
        return axios
            .post("create-guid/", request)
            .then((response) => response.data.guid)
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
            })
            .finally(() => store.dispatch(setCurrentMapLoadingStatus(false)));
    };
    getStateInfo = (request: GetStateInfoRequest): void => {
        store.dispatch(setCurrentMapLoadingStatus(true));
        axios
            .get(`stateinfo/${request.state}.json`)
            .then((response) => {
                store.dispatch(setStateInfo(response.data));
                // If the state is already in the job list, switch to it, else add it to the list.
                if (
                    !store
                        .getState()
                        .mapJobs.find(
                            (job) =>
                                job.state == request.state && job.mapId == 0
                        )
                ) {
                    store.dispatch(
                        addMapJob({
                            name: "Current Districting",
                            mapId: 0,
                            id: request.state,
                            state: request.state,
                            alpha: 0,
                            beta: 0,
                            gamma: 0,
                            eta: 0,
                            score: 0,
                            probability: 0,
                            map: new Map(),
                        })
                    );
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => store.dispatch(setCurrentMapLoadingStatus(false)));
    };
}
export const axiosBladecallerProvider = new AxiosBladecallerProvider();
