const express = require("express");
const bodyParser = require("body-parser");

const { dialogflow } = require("actions-on-google");

// Create an app instance

const dialogFlowApp = dialogflow();

dialogFlowApp.intent("FindFootballer", conv => {
  console.log(conv);
  conv.ask("You are lionel messi");
});

express()
  .use(bodyParser.json(), dialogFlowApp)
  .listen(3000, () => {
    console.log("Listening on port 3000");
  });
