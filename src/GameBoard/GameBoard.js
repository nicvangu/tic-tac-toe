import Tile from '../Tile/Tile';
import './GameBoard.css';

function updateBoardHistory(history, board, command) {
    let updatedHistory = [...history]

    if (command === 'add') {
        updatedHistory = [...updatedHistory, board]
    } else if (command === 'rollback') {
        updatedHistory.pop();
    } else if (command === 'reset') {
        updatedHistory = [];
    }

    return updatedHistory;
}

function GameBoard(props) {
    const { tiles = [], handleTileSelection } =  props;

    return (<div className="game-board">
        {tiles.map((value, index) => {
            return <Tile id={`tile-${index}`} key={index} value={value} index={index} onClick={() => { handleTileSelection(index) }} />
        })}
    </div>);
}

export default GameBoard;
