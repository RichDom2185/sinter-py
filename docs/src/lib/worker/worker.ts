import { PyodideInterface, loadPyodide } from "pyodide";
import { setupInterpreter } from "../setupInterpreter";
import { WorkerRequest, WorkerResponse } from "./types";

let pyodidePromise: Promise<PyodideInterface> | null = null;

const setupPyodide = async () => {
  const pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.29.3/full",
  });
  pyodide.setStdout({
    batched: (text) => post({ type: "stdout", text }),
  });
  pyodide.setStderr({
    batched: (text) => post({ type: "stderr", text }),
  });

  setupInterpreter(pyodide);
  return pyodide;
};

const ensurePyodide = async () => {
  if (pyodidePromise === null) {
    pyodidePromise = setupPyodide();
  }
  return pyodidePromise;
};

const post = (message: WorkerResponse) => {
  self.postMessage(message);
};

const handleMessage = async (request: WorkerRequest) => {
  switch (request.type) {
    case "init": {
      await ensurePyodide();
      post({ type: "ready" });
      return;
    }
    case "run": {
      const pyodide = await ensurePyodide();
      pyodide.globals.set("prgrm", request.payload);
      await pyodide.runPythonAsync(`exec(open('main.py').read())`);
      post({ type: "done" });
    }
  }
};

self.addEventListener("message", async (event: MessageEvent<WorkerRequest>) => {
  const request = event.data;
  try {
    await handleMessage(request);
  } catch (error) {
    post({ type: "error", error });
  }
});
