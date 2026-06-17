const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 OCI Node.js Server</h1>
    <p>Everything is working!</p>
  `);
});

app.listen(80, "0.0.0.0", () => {
  console.log("Server running on port 80");
});
