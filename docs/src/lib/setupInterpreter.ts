import { PyodideInterface } from "pyodide";
import entrypoint from "./sinter-py.py?raw";

const sinterLib = import.meta.glob("./**/*.py", {
  query: "?raw",
  import: "default",
  eager: true,
  base: "../../../src/",
});

function extractFoldersToCreate(files: Record<string, unknown>): Set<string> {
  const folders = Object.keys(files).map((filePath) => {
    const [_dot, ...parts] = filePath.split("/");
    parts.pop(); // Remove filename
    return parts.join("/");
  });
  return new Set(folders.filter((folder) => folder.length > 0));
}

export const setupInterpreter = (pyodide: PyodideInterface) => {
  // TODO: Add type annotation
  const fs = pyodide.FS;
  const foldersToCreate = extractFoldersToCreate(sinterLib);
  for (const folder of foldersToCreate) {
    fs.mkdirTree(folder);
  }
  for (const [filePath, fileContent] of Object.entries(sinterLib)) {
    fs.writeFile(filePath, fileContent as string);
  }
  // Overwrite entrypoint with ours for now
  fs.writeFile("main.py", entrypoint);
};
