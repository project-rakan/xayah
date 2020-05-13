import { RakanProvider, StartMapJobRequest, ScoreMapRequest } from "./types";
import { addMapJob, updateMapJob } from "../../redux/mapJobs/actionCreators";
import axios from "axios";
import { updateCurrentDistricting } from "../../redux/currentDistricting/actionCreators";
import { MapID } from "../../types";

class AxiosRakanProvider implements RakanProvider {
    private async requestUpdate(): Promise<void> {
        return new Promise(() => {
            setTimeout(() => {
                if (this.isJobInProgress) {
                    axios
                        .get(
                            // TODO get correct url for beta - include last mapId recieved - this.lastMapId
                            `http://127.0.0.1:8000/`
                        )
                        .then((response) => {
                            this.lastMapId = response.data.mapId;
                            updateMapJob({
                                id: response.data.id,
                                map: response.data.mapUpdate,
                            });
                            updateCurrentDistricting(response.data.map);
                        });
                }
            }, 1000);
        });
    }

    private isJobInProgress = false;
    private lastMapId: MapID = 0;
    constructor() {
        this.requestUpdate();
    }

    startMapJob(request: StartMapJobRequest): void {
        axios
            .get(
                // TODO get correct url for beta
                `http://127.0.0.1:8000/`
            )
            .then(() => {
                addMapJob({
                    id: request.id,
                    state: request.state,
                    alpha: request.alpha,
                    beta: request.beta,
                    gamma: request.gamma,
                    eta: request.eta,
                    map: new Map(),
                });
            });
        this.isJobInProgress = true;
    }

    // Out of scope for beta
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
}

export const axiosRakanProvider = new AxiosRakanProvider();
