const express = require("express");
const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

var testArr = [];

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/music", (req, res) => {
  res.json("this is the music page");
});

app.post("/music", (req, res) => {
  var test = req.body;
  testArr.push(test);
  res.send(test);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
