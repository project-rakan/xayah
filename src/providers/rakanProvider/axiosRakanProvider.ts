import {
    RakanProvider,
    StartMapJobRequest,
    ScoreMapRequest,
    MapJobUpdate,
} from "./types";
import { addMapJob, updateMapJob } from "../../redux/mapJobs/actionCreators";
import axios from "../axios";
import { store } from "../../redux/store";
import { updateCurrentDistricting } from "../../redux/currentDistricting/actionCreators";

class AxiosRakanProvider implements RakanProvider {
    // TODO remove redux dependency and refactor to utils
    // TODO refactor state modification logic
    private requestUpdate(): void {
        setInterval(() => {
            store.getState().mapJobs.forEach((job) => {
                const jobUpdateRequest = { id: job.id, state: job.state };
                axios
                    .post("get-job-update/", jobUpdateRequest)
                    .then((response) => response.data)
                    .then((data: MapJobUpdate) => {
                        store.dispatch(
                            updateMapJob({
                                id: data.id,
                                mapId: data.mapId,
                                map: new Map(data.updates),
                                score: data.score,
                                probability: data.probability,
                            })
                        );

                        // Also update current districting if the current districting is the mapjob being updated
                        if (
                            store.getState().currentDistricting.mapID ==
                                data.mapId &&
                            store.getState().currentMap.stateInfo.state ==
                                jobUpdateRequest.state
                        ) {
                            store.dispatch(
                                updateCurrentDistricting(data.updates)
                            );
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        }, 10000);
    }

    constructor() {
        this.requestUpdate();
    }

    startMapJob(request: StartMapJobRequest): void {
        axios
            .post("create-job/", request)
            .then((response) => response.data)
            .then(() => {
                store.dispatch(
                    addMapJob({
                        name: request.name,
                        mapId: 0,
                        id: request.id,
                        state: request.state,
                        alpha: request.alpha,
                        beta: request.beta,
                        gamma: request.gamma,
                        score: 0,
                        probability: 0,
                        eta: request.eta,
                        map: new Map(),
                    })
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Out of scope for beta
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
}

export const axiosRakanProvider = new AxiosRakanProvider();
