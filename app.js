const express = require("express");
const app = express();

function middle(req, res, next) {
  console.log("middle ware is working in between");
  next();
}
app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});
app.get("/get", middle, (req, res) => {
  res.send("Don't watch you are not going to take it");
});

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(3000, () => {
  console.log("server is listening on 3000");
});
