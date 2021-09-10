const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello! you are at jacklearns.in");
});

app.listen(4001);
