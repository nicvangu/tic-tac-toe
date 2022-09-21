import { isWinner, isDraw } from "./gameLogic";

describe('isWinner', () => {
    it('should find the winner horizontally', () => {
        expect(isWinner(['x', 'x', 'x', '', '', '', '', '', ''], 'x')).toBeTruthy();
        expect(isWinner(['', '', '', 'x', 'x', 'x', '', '', ''], 'x')).toBeTruthy();
        expect(isWinner(['', '', '', '', '', '','x', 'x', 'x'], 'x')).toBeTruthy();
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
})