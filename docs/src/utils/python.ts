import { useEffect, useState } from "preact/hooks";
import { PyodideInterface, loadPyodide } from "pyodide";

type PyodideOptions = Partial<{
  redirectStdout?: (text: string) => void;
  redirectStderr?: (text: string) => void;
}>;

const setupPyodide = async (options?: PyodideOptions) => {
  const pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full",
  });
  if (options?.redirectStdout) {
    pyodide.setStdout({ batched: options.redirectStdout });
  }
  if (options?.redirectStderr) {
    pyodide.setStderr({ batched: options.redirectStderr });
  }
  return pyodide;
};

export const usePyodide = (options?: PyodideOptions) => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  useEffect(() => {
    (async () => setPyodide(await setupPyodide(options)))();
  }, []);
  return pyodide;
};
