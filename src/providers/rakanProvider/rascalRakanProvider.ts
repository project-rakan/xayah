import { RakanProvider, StartMapJobRequest, ScoreMapRequest } from "./types";
import { addMapJob } from "../../redux/mapJobs/actionCreators";

class RascalRakanProvider implements RakanProvider {
    // TODO This class ought to have a static singleton broker - see the rascal Callbacks example
    // TODO The broker needs to be subsribed to the queue and provided with a callback using MapJobUpdate()
    // See mockRakan Provider for redux actioncreator usage.

    startMapJob(request: StartMapJobRequest): void {
        // TODO send the provided request to Rakan over the queue using rascal.

        // This adds the map job to our local mapjob redux store with an empty district map.
        // The Map will be updated via callbacks
        addMapJob({
            id: request.id,
            state: request.state,
            alpha: request.alpha,
            beta: request.beta,
            gamma: request.gamma,
            eta: request.eta,
            map: new Map(),
        });
    }

    // Out of scope for beta release
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
}

export const rascalRakanProvider = new RascalRakanProvider();
