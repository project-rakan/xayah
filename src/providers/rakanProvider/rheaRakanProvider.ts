import { RakanProvider, StartMapJobRequest, ScoreMapRequest } from "./types";
import { connection } from "./rheaClient";

class RheaRakanProvider implements RakanProvider {
    startMapJob(request: StartMapJobRequest): void {
        throw new Error("Method not implemented.");
    }
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
}

export const rheaRakanProvider = new RheaRakanProvider();
