import GameBoard from './GameBoard';
import { shallow } from 'enzyme';


describe('GameBoard', () => {

  it('should be defined', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.length).toBe(1);
  })

})