import './Options.css';

function Options(props) {
  const { onUndo, onReset } = props;

  return (
    <div className="Options">
      <button className='options-button' id="undo-button" onClick={onUndo}>Undo</button>
      <button  className='options-button' id="reset-button" onClick={onReset}>Reset</button>
    </div>
  );
}

export default Options;
