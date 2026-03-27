const express = require("express");
const open = require("open").default;
const path = require("path");

const {
  startPythonBackend,
  stopPythonBackend,
} = require("./process-manager");

const app = express();
const PORT = 3000;

// Serve frontend (we'll improve this later)
app.get("/", (req, res) => {
  res.send("Turbo DB App is starting...");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Launcher is running" });
});

// Start backend
startPythonBackend();

// Start server
app.listen(PORT, () => {
  console.log(`Launcher running at http://localhost:${PORT}`);

  // Open browser
  open(`http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  stopPythonBackend();
  process.exit();
});