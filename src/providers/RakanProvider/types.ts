import { StartMapJobRequest, ScoreMapRequest } from "../../types/rakanApiTypes";

export interface RakanProvider {
    startMapJob(request: StartMapJobRequest): void;
    requestMapScore(request: ScoreMapRequest): void;
}
