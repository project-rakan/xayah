/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/camelcase */
import { RakanProvider, StartMapJobRequest, ScoreMapRequest } from "./types";
import { create_container, Sender, EventContext } from "rhea";
import optionsHandler from "./options";

const container = create_container();

const args = optionsHandler
    .options({
        n: {
            alias: "node",
            default: "examples",
            describe: "name of node (e.g. queue) to which messages are sent",
        },
        h: {
            alias: "host",
            default: "localhost",
            describe: "dns or ip name of server where you want to connect",
        },
        p: { alias: "port", default: 5672, describe: "port to connect to" },
    })
    .help("help").argv;

const requests = [
    "Twas brillig, and the slithy toves",
    "Did gire and gymble in the wabe.",
    "All mimsy were the borogroves,",
    "And the mome raths outgrabe.",
];
let sender: Sender;

function next_request(context: EventContext): void {
    if (!context.receiver) {
        throw new Error("context reciever is null");
    }
    if (context.receiver.source.address) {
        sender.send({
            reply_to: context.receiver.source.address,
            body: requests[0],
        });
    }
}

container.on("connection_open", function (context) {
    sender = context.connection.open_sender(args.node);
    context.connection.open_receiver({ source: { dynamic: true } });
});
container.on("receiver_open", function (context) {
    next_request(context);
});

container.on("message", function (context) {
    console.log(requests.shift() + " => " + context.message.body);
    if (requests.length) {
        next_request(context);
    } else {
        context.connection.close();
    }
});

container.connect({ port: args.port, host: args.host });

class RheaRakanProvider implements RakanProvider {
    startMapJob(request: StartMapJobRequest): void {
        throw new Error("Method not implemented.");
    }
    requestMapScore(request: ScoreMapRequest): void {
        throw new Error("Method not implemented.");
    }
}

export const rheaRakanProvider = new RheaRakanProvider();
