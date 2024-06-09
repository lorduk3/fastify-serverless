    "use strict";

    require("dotenv").config();

    const Fastify = require("fastify");

    const app = Fastify({
        logger: true
    });


    app.register(require("../app.js"));

    module.exports = async (req, res) => {
        await app.ready();
        app.server.emit("request", req, res);
    }