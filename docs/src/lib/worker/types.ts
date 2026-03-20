type InitRequest = { type: "init" };
type RunRequest = { type: "run"; payload: Uint8Array };

export type WorkerRequest = InitRequest | RunRequest;

type ReadyResponse = { type: "ready" };
type DoneResponse = { type: "done" };
type ErrorResponse = { type: "error"; error: unknown };
type StdoutResponse = { type: "stdout"; text: string };
type StderrResponse = { type: "stderr"; text: string };

export type WorkerResponse =
  | ReadyResponse
  | DoneResponse
  | ErrorResponse
  | StdoutResponse
  | StderrResponse;

/**
 * Pyodide initialization options.
 */
export type PyodideOptions = Partial<{
  onReady?: () => void;
  onError?: (error: unknown) => void;
  redirectStdout?: (text: string) => void;
  redirectStderr?: (text: string) => void;
}>;
