const express = require("express");
const app = express();

app.get("/get", (req, res) => {
  res.send("Don't watch you are not going to take it");
});

app.listen(3000, () => {
  console.log("server is listening on 3000");
});
