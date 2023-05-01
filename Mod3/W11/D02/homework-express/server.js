const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/", (req, res) => {
  res.send(
    `<p>99 little bugs in the code</p><p>99 little bugs</p><p>take one down, patch it around</p><a href="/98">98 little bugs in the code</a>`
  );
});

app.get("/:num", (req, res) => {
  if (req.params.num == 0) {
    res.send(
      `<p>0 little bugs in the code</p><p>0 little bugs</p><p>Yeah, right!</p><a href="/99">99 little bugs in the code</a>`
    );
  }
  let random = Math.floor(Math.random() * 6);
  random = random - 4 >= 0 ? random - 2 : -1;
  res.send(
    `<p>${req.params.num} little bugs in the code</p><p>${
      req.params.num
    } little bugs</p><p>take one down, patch it around</p><a href="/${
      +req.params.num + random
    }">${+req.params.num + random} little bugs in the code</a>`
  );
});
