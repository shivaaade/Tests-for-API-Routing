const express = require("express");
const apps = express();

apps.get("/", (request, response) => {
  response.send("Home Page");
});
apps.get("/about", (request, response) => {
  response.send("About Page");
});
module.exports = apps;
