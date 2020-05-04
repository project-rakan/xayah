import { RakanProvider } from "./types";
import { StartMapJobRequest, ScoreMapRequest } from "../../types/rakanApiTypes";
import { State } from "../../types/atomicTypes";
import { AddMapJob, UpdateMapJob } from "../../redux/MapJobs/actionCreators";
import {
    AddMapScore,
    UpdateMapScore,
} from "../../redux/MapScores/actionCreators";

class MockRakanProvider implements RakanProvider {
    startMapJob(request: StartMapJobRequest): void {
        switch (request.state) {
            case State.Iowa:
                // Create new map job
                AddMapJob({
                    GUID: "IAStartMap123",
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
                UpdateMapJob({
                    GUID: "IAStartMap123",
                    map: mapUpdate,
                });

                // finish async updates of map job
                UpdateMapJob({
                    GUID: "IAStartMap123",
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
                AddMapScore({
                    GUID: "IAScoreMap123",
                    state: request.state,
                    map: request.map,
                    alpha: request.alpha,
                    beta: request.beta,
                    gamma: request.gamma,
                    eta: request.eta,
                });
                UpdateMapScore({
                    GUID: "IAScoreMap123",
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
