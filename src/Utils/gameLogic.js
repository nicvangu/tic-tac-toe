
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

export { isWinner, isDraw };