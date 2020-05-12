import {
    RakanProvider,
    StartMapJobRequest,
    ScoreMapRequest,
    MapJobUpdate,
} from "./types";
import { addMapJob } from "../../redux/mapJobs/actionCreators";
import { AckOrNackFn, BrokerAsPromised, withDefaultConfig } from "rascal";

class RascalRakanProvider implements RakanProvider {
    // TODO This class ought to have a static singleton broker - see the rascal Callbacks example
    // TODO The broker needs to be subsribed to the queue and provided with a callback using MapJobUpdate()
    // See mockRakan Provider for redux actioncreator usage.

    static config = require("./config");

    private requests: (StartMapJobRequest | ScoreMapRequest)[] = [];

    setup = async (): Promise<void> => {
        try {
            const broker = await BrokerAsPromised.create(
                withDefaultConfig(RascalRakanProvider.config)
            );
            broker.on("error", console.error);

            try {
                const subscription = await broker.subscribe("xayah");
                subscription
                    .on("message", function (
                        message,
                        content: MapJobUpdate,
                        ackOrNack: AckOrNackFn
                    ) {
                        console.log(content);
                        ackOrNack();
                    })
                    .on("error", console.error);
            } catch (err) {
                console.error(err);
            }

            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            setInterval(async (): Promise<void> => {
                try {
                    if (this.requests) {
                        const publication = await broker.publish(
                            "rakan",
                            this.requests.pop()
                        );
                        publication.on("error", console.error);
                    }
                } catch (err) {
                    console.error(err);
                }
            }, 1000);
        } catch (err) {
            console.error(err);
        }
    };

    constructor() {
        this.setup();
    }

    startMapJob(request: StartMapJobRequest): void {
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

        // This adds the request to the provider and marks it as being ready to be broadcast over the queue
        this.requests.push(request);
    }

    // Out of scope for beta release
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
}

export const rascalRakanProvider = new RascalRakanProvider();
