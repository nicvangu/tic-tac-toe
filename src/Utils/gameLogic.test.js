import { isWinner, isDraw, updateBoardHistory, togglePlayer } from "./gameLogic";

describe('isWinner', () => {
    it('should find the winner horizontally', () => {
        expect(isWinner(['x', 'x', 'x', '', '', '', '', '', ''], 'x')).toBeTruthy();
        expect(isWinner(['', '', '', 'x', 'x', 'x', '', '', ''], 'x')).toBeTruthy();
        expect(isWinner(['', '', '', '', '', '', 'x', 'x', 'x'], 'x')).toBeTruthy();
    });

    it('should find the winner vertically', () => {
        expect(isWinner(['x', '', '', 'x', '', '', 'x', '', ''], 'x')).toBeTruthy();
        expect(isWinner(['', 'x', '', '', 'x', '', '', 'x', ''], 'x')).toBeTruthy();
        expect(isWinner(['', '', 'x', '', '', 'x', '', '', 'x'], 'x')).toBeTruthy();
    });

    it('should find the winner diagonally', () => {
        expect(isWinner(['x', '', '', '', 'x', '', '', '', 'x'], 'x')).toBeTruthy();
        expect(isWinner(['', '', 'x', '', 'x', '', 'x', '', ''], 'x')).toBeTruthy();
    });

    it('should find if there is a draw', () => {
        expect(isDraw(['x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'x'])).toBeTruthy();
    })

    it('should add to the board history', () => {
        let history = [];
        expect(updateBoardHistory(history, ['', '', 'x', '', '', '', '', '', ''], 'add')).toEqual([["", "", "x", "", "", "", "", "", ""]]);
    })

    it('should rollback history', () => {
        let history = [["", "", "x", "", "", "", "", "", ""], ["o", "", "x", "", "", "", "", "", ""]]
        expect(updateBoardHistory(history, null, 'rollback')).toEqual([["", "", "x", "", "", "", "", "", ""]]);
    })

    it('should prevent an null pointer exception if the history is empty', () => {
        let history = []
        expect(updateBoardHistory(history, null, 'rollback')).toEqual([]);
    })

    it('should reset the history', () => {
        let history = [["", "", "x", "", "", "", "", "", ""], ["o", "", "x", "", "", "", "", "", ""]]
        expect(updateBoardHistory(history, null, 'reset')).toEqual([]);
    })

    it('should toggle to O if the player was X', () => {
        expect(togglePlayer('X')).toBe('O')    
    })

    it('should toggle to X if the player was O', () => {
        expect(togglePlayer('O')).toBe('X')
    })

    
})