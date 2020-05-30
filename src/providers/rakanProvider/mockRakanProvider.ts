import { RakanProvider, StartMapJobRequest, ScoreMapRequest } from "./types";
import { State } from "../../types";
import { addMapJob, updateMapJob } from "../../redux/mapJobs/actionCreators";
import {
    addMapScore,
    updateMapScore,
} from "../../redux/mapScores/actionCreators";
import { store } from "../../redux/store";

class MockRakanProvider implements RakanProvider {
    startMapJob(request: StartMapJobRequest): void {
        switch (request.state) {
            case State.Iowa:
                // Create new map job
                store.dispatch(
                    addMapJob({
                        name: request.name,
                        id: request.id,
                        state: request.state,
                        alpha: request.alpha,
                        beta: request.beta,
                        gamma: request.gamma,
                        eta: request.eta,
                        map: new Map(),
                    })
                );

                // start async updates of map job
                const mapUpdate = new Map();
                mapUpdate.set(1, 1);
                store.dispatch(
                    updateMapJob({
                        id: request.id,
                        map: mapUpdate,
                    })
                );

                // finish async updates of map job
                store.dispatch(
                    updateMapJob({
                        id: request.id,
                        mapId: 1,
                    })
                );
                break;
            default:
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }
    requestMapScore(request: ScoreMapRequest): void {
        switch (request.state) {
            case State.Iowa:
                store.dispatch(
                    addMapScore({
                        id: request.id,
                        state: request.state,
                        map: request.map,
                        alpha: request.alpha,
                        beta: request.beta,
                        gamma: request.gamma,
                        eta: request.eta,
                    })
                );
                store.dispatch(
                    updateMapScore({
                        id: request.id,
                        score: 1,
                        probability: 0.5,
                    })
                );
                break;
            default:
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }
}

export const mockRakanProvider = new MockRakanProvider();
