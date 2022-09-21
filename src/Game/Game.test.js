import Game, { updateBoardHistory } from './Game';
import GameBoard from '../GameBoard/GameBoard';
import { shallow, mount } from 'enzyme';

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

  it('should update the board when there is player input', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    expect(wrapper.find("#game-board").html().includes('>X<')).toBeTruthy()
  })

  it('should not change an existing cell\'s value', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    wrapper.find('#tile-0').at(0).simulate('click');
    expect(wrapper.find("#game-board").html().includes('>X<')).toBeTruthy()
  })  

  it('should handle the restart game button', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    wrapper.find('#reset-button').simulate('click');
    expect(wrapper.find("#game-board").html().includes('>X<')).toBeFalsy()
  })

  it('should indicate the current player\'s turn', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    expect(wrapper.find('#player').text()).toBe("O's turn");
    wrapper.find('#tile-1').at(0).simulate('click');
    expect(wrapper.find('#player').text()).toBe("X's turn")
  })

  it('should handle the undo button if there are changes', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    wrapper.find('#tile-1').at(0).simulate('click');
    wrapper.find('#undo-button').simulate('click');
    expect(wrapper.find("#game-board").html().includes('>X<')).toBeTruthy();
  })

  it('should handle the undo button if there are no changes', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    wrapper.find('#undo-button').simulate('click');
    expect(wrapper.find("#game-board").html().includes('>X<')).toBeFalsy()
  })

})