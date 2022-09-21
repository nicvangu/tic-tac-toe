
function isWinner(boardState, player) {
    let winsGame = false;

    const winningCombinations = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ];

    let playerMoves = [];

    boardState.map((tile, index) => {

        if (tile == player) {
            playerMoves.push(index);
        }
    });

    winningCombinations.forEach(combination => {
        winsGame = winsGame || combination.every(val => playerMoves.includes(val));
    })

    return winsGame;
}

function isDraw(boardState) {
    return !boardState.includes('');
}

function updateBoardHistory(history, board, command) {
    let updatedHistory = [...history]

    if (command === 'add') {
        updatedHistory = [...updatedHistory, board]
    } else if (command === 'rollback') {
        const indexToRemove = updatedHistory.length - 1;
        if (indexToRemove >= 0) {
            updatedHistory = [...updatedHistory.slice(0, indexToRemove)];
        }
    } else if (command === 'reset') {
        updatedHistory = [];
    }

    return updatedHistory;
}

function togglePlayer(currentPlayer) {
    return currentPlayer === 'X' ? 'O' : 'X';
}

export { isWinner, isDraw, updateBoardHistory, togglePlayer };