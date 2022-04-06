const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/greet", (req, res) => {
  res.send("I miss you ❤...");
});

app.listen(9090, () => console.log("🚀🚀 Server running..."));
