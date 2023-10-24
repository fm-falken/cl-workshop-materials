const chalk = require("chalk");

const express = require("express");
const app = express();
const port = 3000; // Can be any port really in order to test out the error

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

fancyOut(
  "IMPORTANT!",
  "Start any app on port 3000 or any USED port defined in `port` constant first in order for this error to show!"
);
