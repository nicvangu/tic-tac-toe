import React, { useState, useEffect } from 'react';
import Tile from '../Tile/Tile';
import './GameBoard.css';

function GameBoard() {
    const [tiles, setTiles] = useState(['x','','','','','','','','']);
    const [boardHistory, setBoardHistory] = useState([]);

    
    const handleTileSelection = (index) => {
        console.log(index);
        let tempTiles = [...tiles];
        tempTiles[index] = 'x';
        setTiles(tempTiles);
    }
    

    return (<div className="game-board">
        {tiles.map((value, index) => {
            return <Tile key={index} value={value} index={index} onClick={() => { handleTileSelection(index) }} />
        })}
    </div>);
}

export default GameBoard;