import React, { useState } from 'react';
import Tile from '../Tile/Tile';
import './GameBoard.css';

function GameBoard() {
    const [tiles, setTiles] = useState(Array(9).fill('x'));

    return (<div className="game-board">
        {tiles.map((value, index) => {
            return <Tile key={index} index={index} value={value} />
        })}
    </div>);
}

export default GameBoard;