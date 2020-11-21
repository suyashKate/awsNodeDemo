const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Congratulations! Your Node.js server is up.");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
