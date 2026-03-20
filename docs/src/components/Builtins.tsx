import { FunctionComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

type RowData = {
  id: string;
  name: string;
};

type Props = {
  builtIns: string[];
  setBuiltIns: (builtIns: string[]) => void;
};

const Builtins: FunctionComponent<Props> = ({ builtIns, setBuiltIns }) => {
  const nextId = useRef(1);
  const [rows, setRows] = useState<RowData[]>(() => {
    return builtIns.map((name) => ({
      id: `row-${nextId.current++}`,
      name,
    }));
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setBuiltIns(rows.map((r) => r.name));
  }, [rows]);

  const handleRows = (value: string) => {
    const names = value.split("\n").filter((name) => name.trim() !== "");
    const rows = names.map((name) => ({
      id: `row-${nextId.current++}`,
      name,
    }));
    setRows(rows);
    setInputValue(value);
  };

  const handleMove = (dir: -1 | 1, index: number) => {
    const newRows = [...rows];
    [newRows[index + dir], newRows[index]] = [
      newRows[index],
      newRows[index + dir],
    ];
    setRows(newRows);
    setInputValue(newRows.map((r) => r.name).join("\n"));
  };

  const handleDelete = (id: string) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
    setInputValue(newRows.map((r) => r.name).join("\n"));
  };

  return (
    <details class="block">
      <summary class="block">Built-in Functions</summary>

      <p className="block">
        Define built-in functions names for the SVML compiler to translate into
        <code>CALLV</code> instructions. Make sure the ordering of the names is
        consistent with the built-in functions defined in the target runtime.
      </p>

      <textarea
        class="textarea block"
        placeholder="Enter names (one name per line)"
        value={inputValue}
        // Preact uses `onInput` instead of `onChange` for text inputs
        onInput={(e) => handleRows((e.target as HTMLTextAreaElement).value)}
      />
      <table class="table is-narrow is-hoverable is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{index}</td>
              <td>
                <div>
                  <button
                    class="button is-text is-small"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleMove(-1, index)}
                    disabled={index === 0}
                  >
                    <span class="icon" aria-label={`Move ${row.name} up`}>
                      <i class="fas fa-arrow-up" aria-hidden="true"></i>
                    </span>
                  </button>
                  <button
                    class="button is-text is-small"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleMove(1, index)}
                    disabled={index === rows.length - 1}
                  >
                    <span class="icon" aria-label={`Move ${row.name} down`}>
                      <i class="fas fa-arrow-down" aria-hidden="true"></i>
                    </span>
                  </button>
                  <button
                    class="button is-text is-small"
                    style={{
                      color: "var(--bulma-danger)",
                      textDecoration: "none",
                    }}
                    onClick={() => handleDelete(row.id)}
                  >
                    <span class="icon" aria-label={`Delete ${row.name}`}>
                      <i class="fas fa-trash" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
};

export default Builtins;
