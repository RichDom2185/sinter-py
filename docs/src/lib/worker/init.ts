import { PyodideOptions, WorkerResponse } from "./types";

export const createPyodideWorker = (options?: PyodideOptions) => {
  const worker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });
  worker.addEventListener("message", (event: MessageEvent<WorkerResponse>) => {
    const message = event.data;
    switch (message.type) {
      case "ready": {
        options?.onReady?.();
        return;
      }
      case "done": {
        // Do nothing for now
        return;
      }
      case "stdout": {
        options?.redirectStdout?.(message.text);
        return;
      }
      case "stderr": {
        options?.redirectStderr?.(message.text);
        return;
      }
      case "error": {
        console.error("[WORKER]", message.error);
        options?.onError?.(message.error);
        return;
      }
    }
  });
  worker.addEventListener("error", (event) => {
    console.error("[WORKER]", event.error ?? event.message);
    options?.onError?.(event.error ?? event.message);
  });
  return worker;
};
