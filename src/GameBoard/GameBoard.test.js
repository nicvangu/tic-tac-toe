import GameBoard from './GameBoard';
import { shallow } from 'enzyme';

describe('GameBoard', () => {

  it('should be defined', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.length).toBe(1);
  })

  it('should have a list of tiles', () => {
    const wrapper = shallow(<GameBoard tiles={['','','','','','','','','']}/>);
    expect(wrapper.children().length).toBe(9);
  })

})