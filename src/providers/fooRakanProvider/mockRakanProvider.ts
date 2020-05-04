import { RakanProvider, StartMapJobRequest, ScoreMapRequest } from "./types";
import { State } from "../../types";
import {
    addMapJob,
    updateMapJob,
} from "../../redux/fooMapJobs/fooActionCreators";
import {
    addMapScore,
    updateMapScore,
} from "../../redux/fooMapScores/fooActionCreators";

class MockRakanProvider implements RakanProvider {
    startMapJob(request: StartMapJobRequest): void {
        switch (request.state) {
            case State.Iowa:
                // Create new map job
                addMapJob({
                    id: "IAStartMap123",
                    state: request.state,
                    alpha: request.alpha,
                    beta: request.beta,
                    gamma: request.gamma,
                    eta: request.eta,
                    map: new Map(),
                });

                // start async updates of map job
                const mapUpdate = new Map();
                mapUpdate.set(1, 1);
                updateMapJob({
                    id: "IAStartMap123",
                    map: mapUpdate,
                });

                // finish async updates of map job
                updateMapJob({
                    id: "IAStartMap123",
                    mapId: 1,
                });
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
                addMapScore({
                    id: "IAScoreMap123",
                    state: request.state,
                    map: request.map,
                    alpha: request.alpha,
                    beta: request.beta,
                    gamma: request.gamma,
                    eta: request.eta,
                });
                updateMapScore({
                    id: "IAScoreMap123",
                    score: 1,
                    probability: 0.5,
                });
                break;
            default:
                throw new Error(
                    "Mock Bladecaller Provider only returns Iowa data"
                );
        }
    }
}

export const mockRakanProvider = new MockRakanProvider();
