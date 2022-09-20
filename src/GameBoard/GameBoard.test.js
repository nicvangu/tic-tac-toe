import GameBoard from './GameBoard';
import { shallow, mount } from 'enzyme';


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
    const wrapper = mount(<GameBoard />);
    wrapper.find('.tile').at(0).simulate('click');
    expect(wrapper.find('.tile').at(0).text()).toBe('x')
  })

})