const chalk = require("chalk");

const express = require("express");
const app = express();
const port = 3000;

const fancyOut = (text, data) => {
  console.log(chalk.blue(text, chalk.yellow(data)));
};

app.get("/", (req, res) => {
  res.send("Hello World!");
  fancyOut("Request URL:", req.url);
});

app.get("/another-link", (req, res) => {
  res.send("I'm a new new page!");
  fancyOut("Request URL:", req.url);
});

app.listen(port, () => {
  console.log(chalk.green(`Example app listening on port`), chalk.red(port));
});

fancyOut("System status:", "Starting...");
