import { useEffect, useState } from "preact/hooks";
import { PyodideInterface, loadPyodide } from "pyodide";

const setupPyodide = async () => {
  const pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full",
  });
  return pyodide;
};

export const usePyodide = () => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  useEffect(() => {
    (async () => setPyodide(await setupPyodide()))();
  }, []);
  return pyodide;
};
