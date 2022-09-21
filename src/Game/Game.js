import './Game.css';
import React, { useState } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import Options from '../Options/Options';
import Player from '../Player/Player';

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


function Game() {
    const [tiles, setTiles] = useState(['','','','','','','','','']);
    const [boardHistory, setBoardHistory] = useState([]);

    
    const handleTileSelection = (index) => {
        let newTiles = [...tiles];
        newTiles[index] = 'x';
        setTiles(newTiles);
        setBoardHistory(updateBoardHistory(boardHistory, newTiles, 'add'))
    }

    function startGame() {
        
    }

    return (
        <div className="Game">
            <div>
                <Player message={"Player One's Turn"}/>
                <GameBoard handleTileSelection={handleTileSelection} tiles={tiles} />
                <Options />
            </div>
        </div>
    );
}

export default Game;


export { updateBoardHistory }