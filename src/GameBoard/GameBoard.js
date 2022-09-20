import React, { useState } from 'react';
import Tile from '../Tile/Tile';
import './GameBoard.css';

function updateBoardHistory(history, board, command) {
    let updatedHistory = [...history]

    if (command === 'add') {
        updatedHistory = [...updatedHistory, board]
    } else if (command === 'rollback') {
        updatedHistory.pop();
    }

    return updatedHistory;
}

function GameBoard() {
    const [tiles, setTiles] = useState(['','','','','','','','','']);
    const [boardHistory, setBoardHistory] = useState([]);

    
    const handleTileSelection = (index) => {
        let tempTiles = [...tiles];
        tempTiles[index] = 'x';
        setTiles(tempTiles);
    }
    
    

    return (<div className="game-board">
        {tiles.map((value, index) => {
            return <Tile id={`tile-${index}`} key={index} value={value} index={index} onClick={() => { handleTileSelection(index) }} />
        })}
    </div>);
}

export default GameBoard;

export { updateBoardHistory }