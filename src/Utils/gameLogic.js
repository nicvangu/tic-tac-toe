
function isWinner(boardState, player) {
    let winsGame = false;
    const winningCombinations = [
        '012',
        '036',
        '048',
        '147',
        '246',
        '258',
        '345',
        '678'
    ];

    let playerMoves = '';

    boardState.map((value, index) => {
        if (value == player) {
            playerMoves = playerMoves + '' + index;
        }
    });

    winningCombinations.forEach(combination => {
        if (playerMoves.includes(combination)) {
            winsGame = true;
            return;
        }
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