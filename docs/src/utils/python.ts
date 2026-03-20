import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { createPyodideWorker } from "../lib/worker/init";
import { PyodideOptions, WorkerRequest } from "../lib/worker/types";

type UsePyodideOptions = Partial<{
  redirectStdout?: (text: string) => void;
  redirectStderr?: (text: string) => void;
}>;

const setupPyodide = (options?: PyodideOptions) => {
  const worker = createPyodideWorker(options);
  return {
    init: () => worker.postMessage({ type: "init" } satisfies WorkerRequest),
    destroy: () => worker.terminate(),
    run: (payload: Uint8Array) =>
      worker.postMessage({ type: "run", payload } satisfies WorkerRequest),
  };
};

export const usePyodide = (options?: UsePyodideOptions) => {
  const [isLoading, setIsLoading] = useState(true);
  const pyodideRef = useRef<ReturnType<typeof setupPyodide> | null>(null);

  useEffect(() => {
    const pyodide = setupPyodide({
      ...options,
      onReady: () => setIsLoading(false),
      onError: (error) => {
        console.error("Error from Pyodide worker:", error);
        setIsLoading(false);
      },
    });
    pyodide.init();
    pyodideRef.current = pyodide;
    return () => {
      pyodide.destroy();
      pyodideRef.current = null;
    };
  }, []);

  const runProgram = useCallback(
    (program: Uint8Array | ArrayBuffer) => {
      if (isLoading) {
        throw new Error("Pyodide is not ready yet!");
      }
      const payload =
        program instanceof Uint8Array ? program : new Uint8Array(program);
      pyodideRef.current?.run(payload);
    },
    [isLoading],
  );
  return { isLoading, runProgram };
};
