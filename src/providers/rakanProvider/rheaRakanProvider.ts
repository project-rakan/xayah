import {
    RakanProvider,
    StartMapJobRequest,
    ScoreMapRequest,
    MapJobUpdate,
} from "./types";
import { connection } from "./rheaClient";

class RheaRakanProvider implements RakanProvider {
    startMapJob(request: StartMapJobRequest): void {
        throw new Error("Method not implemented.");
    }
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
    requestUpdate(lastMapId: number): MapJobUpdate {
        throw new Error("Method not implemented.");
    }
}

connection.open_sender("examples");

export const rheaRakanProvider = new RheaRakanProvider();
