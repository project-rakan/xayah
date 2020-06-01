import { RakanProvider, StartMapJobRequest, ScoreMapRequest } from "./types";
import { addMapJob, updateMapJob } from "../../redux/mapJobs/actionCreators";
import axios from "../axios";
import { updateCurrentDistricting } from "../../redux/currentDistricting/actionCreators";
import { store } from "../../redux/store";
import { MapJobUpdate } from "../../redux/mapJobs/types";

class AxiosRakanProvider implements RakanProvider {
    // TODO remove redux dependency and refactor to utils
    // TODO refactor state modification logic
    private requestUpdate(): void {
        setInterval(() => {
            store.getState().mapJobs.forEach((job) => {
                const jobUpdateRequest: MapJobUpdate = { id: job.id };
                axios
                    .post("get-job-update/", jobUpdateRequest)
                    .then((response) => {
                        console.log(response.data);
                        store.dispatch(
                            updateMapJob({
                                id: response.data.id,
                                map: new Map(response.data.updates),
                            })
                        );
                        store.dispatch(
                            updateCurrentDistricting(
                                new Map(response.data.updates)
                            )
                        );
                    });
            });
        }, 10000);
    }

    constructor() {
        this.requestUpdate();
    }

    startMapJob(request: StartMapJobRequest): void {
        axios.post("create-job/", request).then(() => {
            store.dispatch(
                addMapJob({
                    name: request.name,
                    mapId: 0,
                    id: request.id,
                    state: request.state,
                    alpha: request.alpha,
                    beta: request.beta,
                    gamma: request.gamma,
                    eta: request.eta,
                    map: new Map(),
                })
            );
        });
    }

    // Out of scope for beta
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
}

export const axiosRakanProvider = new AxiosRakanProvider();
