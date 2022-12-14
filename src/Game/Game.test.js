import Game from './Game';
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
    expect(wrapper.find('#player').text()).toBe("Player O Turn");
    wrapper.find('#tile-1').at(0).simulate('click');
    expect(wrapper.find('#player').text()).toBe("Player X Turn")
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
  });

  it('should check if the game ends in a victory', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    wrapper.find('#tile-3').at(0).simulate('click');
    wrapper.find('#tile-1').at(0).simulate('click');
    wrapper.find('#tile-4').at(0).simulate('click');
    wrapper.find('#tile-2').at(0).simulate('click');
    expect(wrapper.find('#player').text()).toBe("Player X Wins!");
  })

  it('should check if the game ends in a draw', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    wrapper.find('#tile-3').at(0).simulate('click');
    wrapper.find('#tile-1').at(0).simulate('click');
    wrapper.find('#tile-4').at(0).simulate('click');
    wrapper.find('#tile-5').at(0).simulate('click');
    wrapper.find('#tile-8').at(0).simulate('click');
    wrapper.find('#tile-6').at(0).simulate('click');
    wrapper.find('#tile-2').at(0).simulate('click');
    wrapper.find('#tile-7').at(0).simulate('click');
    expect(wrapper.find('#player').text()).toBe("Draw");
  })

  it('should not allow for more tile selection after a game over', () => {
    const wrapper = mount(<Game />);
    wrapper.find('#tile-0').at(0).simulate('click');
    wrapper.find('#tile-3').at(0).simulate('click');
    wrapper.find('#tile-1').at(0).simulate('click');
    wrapper.find('#tile-4').at(0).simulate('click');
    wrapper.find('#tile-2').at(0).simulate('click');
    wrapper.find('#tile-7').at(0).simulate('click');
    expect(wrapper.find('#player').text()).toBe("Player X Wins!");
  })

})