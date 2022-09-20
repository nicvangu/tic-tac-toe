import GameBoard, { updateBoardHistory } from './GameBoard';
import { shallow } from 'enzyme';


describe('GameBoard', () => {

  it('should be defined', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.length).toBe(1);
  })

  it('should have a list of tiles', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.children().length).toBe(9);
  })

  it('should handleTileSelection', () => {
    const wrapper = shallow(<GameBoard />);
    wrapper.find('#tile-0').simulate('click');
    expect(wrapper.find('#tile-0').prop('value')).toBe('x')
  })

  it('should add to the board history', () => {
    let history = [];
    expect(updateBoardHistory(history, ['','','x','','','','','',''], 'add')).toEqual([["", "", "x", "", "", "", "", "", ""]]);
  })

  it('should rollback history', () => {
    let history = [["", "", "x", "", "", "", "", "", ""], ["o", "", "x", "", "", "", "", "", ""]]
    expect(updateBoardHistory(history, null, 'rollback')).toEqual([["", "", "x", "", "", "", "", "", ""]]);
  })

})