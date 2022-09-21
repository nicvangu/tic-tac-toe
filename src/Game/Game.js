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

function togglePlayer(currentPlayer) {
    return currentPlayer === 'X' ? 'O' : 'X';
}

const defaultTiles = ['','','','','','','','',''];

function Game() {    
    const [tiles, setTiles] = useState(defaultTiles);
    const [boardHistory, setBoardHistory] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [playerMessage, setPlayerMessage] = useState('X\'s Turn')

    const handleTileSelection = (index) => {
        let newTiles = [...tiles];
        let nextPlayer;

        if (newTiles[index] === '') {
            newTiles[index] = currentPlayer;
            setTiles(newTiles);
            setBoardHistory(updateBoardHistory(boardHistory, newTiles, 'add'))
            nextPlayer = togglePlayer(currentPlayer);
            setCurrentPlayer(nextPlayer)
            setPlayerMessage(`${nextPlayer}\'s turn`)
        }

    }

    function initGame() {
        setTiles(defaultTiles)
        setBoardHistory(updateBoardHistory([], null, 'reset'))
        setCurrentPlayer('X')
        setPlayerMessage(`X\'s turn`)
    }

    function handleUndo() {
        
    }
   
    return (
        <div className="Game">
            <div>
                <Player id="player" message={playerMessage}/>
                <GameBoard id="game-board" handleTileSelection={handleTileSelection} tiles={tiles} />
                <Options id="options" onUndo={handleUndo} onReset={initGame} />
            </div>
        </div>
    );
}

export default Game;


export { updateBoardHistory }