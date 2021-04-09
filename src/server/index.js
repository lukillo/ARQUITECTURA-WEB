  
const http = require("http");
const httpContext = require("express-http-context");
const express = require("express");
const environment = require("dotenv").config();
const config = require("../../config");
const bodyParser = require("body-parser");

//Swagger
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

//Define routes and events
const { bind } = require('./routes');
const events = require("./events.js");

const { port } = config.server;

//Start Express-js.
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Middleware token verified
app.use(httpContext.middleware);

//Bind the app with routes.
bind(app);

//Start listen mode.
app.listen(port, () => events.onListen(port));

//Define server "special" event to handle situations.
server.on("error", events.onServerError);
process.on("SIGINT", () => events.onProcessKill(server));
process.on("SIGTERM", () => events.onProcessKill(server));
process.on("unhandledRejection", events.onException);
process.on("uncaughtException", (err) => events.onException(err));
