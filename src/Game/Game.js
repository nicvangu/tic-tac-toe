import './Game.css';
import React, { useState } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import Options from '../Options/Options';
import Player from '../Player/Player';
import { isDraw, isWinner, updateBoardHistory, togglePlayer } from '../Utils/gameLogic';


function Game() {
    const defaultTiles = ['', '', '', '', '', '', '', '', ''];
    const [tiles, setTiles] = useState(defaultTiles);
    const [boardHistory, setBoardHistory] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [playerMessage, setPlayerMessage] = useState('Player X Turn')
    const [isGameOver, setIsGameOver] = useState(false);

    function handleTileSelection(index) {
        if (!isGameOver) {
            let newTiles = [...tiles];
            let nextPlayer;

            if (newTiles[index] === '') {
                newTiles[index] = currentPlayer;
                setTiles(newTiles);
                setBoardHistory(updateBoardHistory(boardHistory, newTiles, 'add'))
                if (!findWinner(newTiles)) {
                    nextPlayer = togglePlayer(currentPlayer);
                    setCurrentPlayer(nextPlayer)
                    setPlayerMessage(`Player ${nextPlayer} Turn`)
                }
            }
        }
    }

    function findWinner(newTiles) {
        let nextGameState = isGameOver;
        let currentPlayerWon = isWinner(newTiles, currentPlayer);
        let gameIsADraw = isDraw(newTiles);

        if (currentPlayerWon) {
            setPlayerMessage(`Player ${currentPlayer} Wins!`)
        } else if (gameIsADraw) {
            setPlayerMessage('Draw')
        }

        nextGameState = currentPlayerWon || gameIsADraw;
        setIsGameOver(nextGameState)

        return nextGameState;
    }

    function initGame() {
        setTiles(defaultTiles)
        setBoardHistory(updateBoardHistory([], null, 'reset'))
        setCurrentPlayer('X')
        setPlayerMessage(`Player X Turn`)
        setIsGameOver(false)
    }

    function handleUndo() {
        if (!isGameOver) {
            let nextBoardHistory = updateBoardHistory(boardHistory, null, 'rollback')
            let nextTiles;
            let nextPlayer;
            if (nextBoardHistory.length > 0) {
                nextTiles = nextBoardHistory[nextBoardHistory.length - 1];
                setBoardHistory(nextBoardHistory)
                nextPlayer = togglePlayer(currentPlayer);
            } else {
                nextTiles = defaultTiles;
                setBoardHistory(nextBoardHistory);
                nextPlayer = 'X';
            }
            setTiles(nextTiles)
            setCurrentPlayer(nextPlayer)
            setPlayerMessage(`Player ${nextPlayer} Turn`)
        }
    }

    return (
        <div className="Game">
            <div>
                <Player id="player" message={playerMessage} />
                <GameBoard id="game-board" handleTileSelection={handleTileSelection} tiles={tiles} />
                <Options id="options" onUndo={handleUndo} onReset={initGame} />
            </div>
        </div>
    );
}

export default Game;