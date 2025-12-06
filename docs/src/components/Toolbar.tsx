import { FunctionComponent } from "preact";

type Props = {
  handleClickRun: () => void;
  handleClickCompile: () => void;
  handleClickSaveAs: () => void;
};

const Toolbar: FunctionComponent<Props> = ({
  handleClickRun,
  handleClickCompile,
  handleClickSaveAs,
}) => {
  return (
    <div className="block level">
      <div className="level-left">
        <button
          className="level-item button is-outlined"
          onClick={handleClickRun}
        >
          <span class="icon">
            <i class="fa-solid fa-play" />
          </span>
          <span>Compile and Run</span>
        </button>
        <button
          className="level-item button is-outlined"
          onClick={handleClickCompile}
        >
          <span class="icon">
            <i class="fa-solid fa-gears" />
          </span>
          <span>Compile only</span>
        </button>
        <button
          className="level-item button is-outlined"
          onClick={handleClickSaveAs}
        >
          <span class="icon">
            <i class="fa-solid fa-floppy-disk" />
          </span>
          <span>Save SVML File</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
