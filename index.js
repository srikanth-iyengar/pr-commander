const { createNodeMiddleware, createProbot } = require("probot");

const app = require("./app.js");
const probot = createProbot();

module.exports = createNodeMiddleware(app, { probot, webhooksPath: '/' });
