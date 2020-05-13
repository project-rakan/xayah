/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/camelcase */
// [eventHubPath]/ConsumerGroups/[consumerGroup]/Partitions/[partitionId]
// Endpoint=sb://<eventhub>.servicebus.windows.net/;SharedAccessKeyName=<sharedAccessKeyName>;SharedAccessKey=<sharedAccessKey>;EntityPath=<entity-path>
// wss://<eventhub>.servicebus.windows.net:443/$servicebus/websocket -->
const hostName = "127.0.0.1";
const sharedAccessKeyName = "RootManageSharedAccessKey";
const sharedAccessKey = "<sharedAccessKey>";
const wsServer = "ws://" + hostName + ":5672/"; // Our websocket server
const eventhubName = "<eventhubName>";
const eventHubConsumerGroup = "<eventhubConsumerGroup>";
const connectionSettings = {
    hostname: hostName,
    container_id: "conn" + new Date().getTime(),
    max_frame_size: 4294967295,
    channel_max: 65535,
    idle_timeout: 120000,
    outgoing_locales: "en-US",
    incoming_locales: "en-US",
    offered_capabilities: null,
    desired_capabilities: null,
    properties: {},
    connection_details: null, // Will be set below!
    reconnect: false,
    username: sharedAccessKeyName,
    password: sharedAccessKey,
    onSuccess: null,
    onFailure: null,
};

// Connect to the EventHub over AMQP
let sender;
const client = require("rhea");
const ws = client.websocket_connect(WebSocket);

connectionSettings.connection_details = ws(wsServer, ["AMQPWSB10"]);
client.on("connection_open", function (ctx) {
    console.log("Connection Opened");

    // Connect to a topic, $management contains our partitions
    // More: https://github.com/Azure/azure-event-hubs-node/blob/91ba72d47f0fbc0e07318c221102bbcb01df271a/send_receive/lib/client.js#L169
    connection.open_receiver("$management");
    sender = connection.open_sender("$management");
});

client.on("connection_error", function (ctx) {
    console.log("Connection Error: " + ctx);
});

client.on("connection_close", function (ctx) {
    console.log("Connection Closed");
});

client.on("receiver_open", function (ctx) {
    console.log("Receiver open");
    console.log(ctx);
});

client.on("sendable", function (context) {
    // Our sender to the $management topic has been opened
    // Send a message to our $management topic to fetch our partitions
    sender.send({
        body: client.message.data_section(str2ab("[]")),
        application_properties: {
            operation: "READ",
            name: eventhubName,
            type: "com.microsoft:eventhub",
        },
    });
});

client.on("message", function (context) {
    if (context.receiver.source.address === "$management") {
        const p = context.message.body;
        const partitionCount = p.partition_count;

        // Open receivers for all my partitions
        for (let i = 0; i < partitionCount; i++) {
            console.log(
                "Opening receiver for " +
                    "/" +
                    eventhubName +
                    "/ConsumerGroups/" +
                    eventHubConsumerGroup +
                    "/Partitions/" +
                    i
            );
            connection.open_receiver({
                source: {
                    address:
                        "/" +
                        eventhubName +
                        "/ConsumerGroups/" +
                        eventHubConsumerGroup +
                        "/Partitions/" +
                        i,
                    filter: client.filter.selector(
                        "amqp.annotation.x-opt-enqueuedtimeutc > " +
                            new Date().getTime()
                    ),
                },
            });
        }
    }

    // Process message
    if (!context.message.body.content) {
        return;
    }

    const decodedMessage = Utf8ArrayToStr(context.message.body.content);
    const decodedMessages = decodedMessage.split("\n"); // Apparently multiple json messages per payload
    console.log(decodedMessages);
});

client.on("error", function (ctx) {
    console.log(ctx);
});

export const connection = client.connect(connectionSettings);
