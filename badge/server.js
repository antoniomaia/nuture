const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

const draw = require("./canvas.js");
app.use(cors());

app.get("/badge.js", (req, res) => {
  res.sendFile("./badge.js", { root: __dirname });
});

app.get("/badge.png", (req, res) => {
  res.setHeader("Content-Type", "image/png");

  const id = req.query.id;

  draw(id).pngStream().pipe(res);

  //res.sendFile("./download.jpeg", { root: __dirname });
});

app.listen(port, () => {
  console.log(`app listening at http://local.ecological.earth:${port}`);
});
