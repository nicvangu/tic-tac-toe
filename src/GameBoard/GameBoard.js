import Tile from '../Tile/Tile';
import './GameBoard.css';

function GameBoard(props) {
    const { tiles = [], handleTileSelection } =  props;

    return (<div className="game-board">
        {tiles.map((value, index) => {
            return <Tile id={`tile-${index}`} key={index} value={value} index={index} onClick={() => { handleTileSelection(index) }} />
        })}
    </div>);
}

export default GameBoard;
