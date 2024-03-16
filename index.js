const express = require("express");
const path = require("path");
const app = express();

const staticFolderPath = path.join(__dirname, "static");

// Serve static files from the 'static' folder
app.use(express.static(staticFolderPath));

app.get("/identity-connect.txt", (req, res) => {
  const txtFilePath = path.join(staticFolderPath, "identity-connect.txt");
  res.sendFile(txtFilePath);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
