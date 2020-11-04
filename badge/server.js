const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get("/badge.js", (req, res) => {
  res.sendFile("./badge.js", { root: __dirname });
});

app.listen(port, () => {
  console.log(`app listening at http://local.ecological.earth:${port}`);
});
