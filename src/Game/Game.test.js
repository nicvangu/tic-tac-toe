import Game, { updateBoardHistory } from './Game';
import { shallow } from 'enzyme';
import GameBoard from '../GameBoard/GameBoard';

describe('Game', () => {

  it('should be defined', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.length).toBe(1);
  })

  it('should contain the GameBoard', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.html().includes("game-board")).toBeTruthy();
  })

  it('should contain the Options', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.html().includes("Options")).toBeTruthy();
  })

  it('should contain the Player', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.html().includes("Player")).toBeTruthy();
  })

  it('should add to the board history', () => {
    let history = [];
    expect(updateBoardHistory(history, ['','','x','','','','','',''], 'add')).toEqual([["", "", "x", "", "", "", "", "", ""]]);
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

  xit('should handleTileSelection', () => {
    const wrapper = shallow(<GameBoard tiles={['','','','','','','','','']}/>);
    wrapper.find('#tile-0').simulate('click');
    expect(wrapper.find('#tile-0').prop('value')).toBe('x')
  })

})