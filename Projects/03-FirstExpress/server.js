const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/greeting/:name", (req, res) => {
  res.send("Hello, " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tip = req.params.total * req.params.tipPercentage * 0.01;
  res.send(tip.toFixed(2).toString());
});

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  res.send(`
    ${req.params.question}<h1>${
    responses[Math.floor(Math.random() * responses.length)]
  }</h1>
  `);
});
