const express = require("express");
const path = require("path");
const app = express();

const txtFilePath = path.join(__dirname, "identity-connect.txt");

app.get("/identity-connect.txt", (req, res) => {
  res.sendFile(txtFilePath);
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
