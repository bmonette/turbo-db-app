const { spawn } = require("child_process");

let pythonProcess = null;

function startPythonBackend() {
  console.log("Starting Python backend...");

  pythonProcess = spawn("python", ["-m", "uvicorn", "app.main:app", "--reload"], {
    cwd: "../backend",
    shell: true,
    stdio: "inherit",
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python backend stopped with code ${code}`);
  });
}

function stopPythonBackend() {
  if (pythonProcess) {
    console.log("Stopping Python backend...");
    pythonProcess.kill();
  }
}

module.exports = {
  startPythonBackend,
  stopPythonBackend,
};