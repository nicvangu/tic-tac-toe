import React, { useState } from 'react';
import Tile from '../Tile/Tile';

function GameBoard() {
    const [tiles, setTiles] = useState([{
        player: "",
        value: ""
    }]);

    return (<div className="game-board">
        {tiles.map((tileProps, index) => {
            return <Tile key={index} index={index} value={tileProps.value} />
        })}
    </div>);
}

export default GameBoard;