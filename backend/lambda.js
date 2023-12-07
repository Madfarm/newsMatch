const app = require("./server");
const awsServerlessExpress = require("aws-serverless-express");

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    return awsServerlessExpress.proxy(server, event, context);
}