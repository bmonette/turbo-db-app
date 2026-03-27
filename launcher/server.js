const express = require("express");

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Launcher is running" });
});

app.listen(PORT, () => {
  console.log(`Launcher server running at http://localhost:${PORT}`);
});